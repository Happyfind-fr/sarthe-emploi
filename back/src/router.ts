import { Request, Response, NextFunction } from "express";
import { Formatter } from './services';
import * as Handler from './handlers';
import * as Middleware from './middlewares';
import * as Migration from './migrations';
import * as type from './types';
import dotenv from 'dotenv';

export async function requestHandler(this: ThisType<type.IndexSignature>, req: Request, res: Response, next: NextFunction) {

    dotenv.config();

    let path = req.path;

    if (path === "/") return new Formatter().sendCustomResponse(res, 418, "path error");

    const pathComponents = path.split('/');
    const method = req.method.toLowerCase();
    const handlerClassName = await new Formatter().upperFirstChar(pathComponents[1].split("/")[0])
    const controllerFunction = (["get", "delete"].includes(pathComponents[2])) ? pathComponents[2] : `${method}_${pathComponents[2]}`;

    if (handlerClassName.length < 3 || !Object.keys(Handler).includes(handlerClassName))
        return new Formatter().sendCustomResponse(res, 418, "error handlerclassname");

    if (pathComponents[2] === "migrate" && method === 'post') return (this as type.IndexSignature)[method](path.toLowerCase(), getMigration(handlerClassName)) && next();

    if (!Object.getOwnPropertyNames((Handler as type.IndexSignature)[handlerClassName]?.prototype).slice(1).includes(controllerFunction))
        return new Formatter().sendCustomResponse(res, 418, "error function");

    if ((process.env.ALLOWED_METHODS!.split(',').some(item =>
        item.substring(0, 3) === controllerFunction?.substring(0, 3) &&
        item.substring(0, 3) === method.substring(0, 3)) &&
        method.substring(0, 3) === controllerFunction?.substring(0, 3)) === false) {
        return new Formatter().sendCustomResponse(res, 418, 'METHOD NOT ALLOWED');
    }

    path = pathComponents.length > 3 ? `/${pathComponents[1]}/${pathComponents[2]}/:id` : path;
    let controller = new (Handler as type.IndexSignature)[handlerClassName]();
    (this as type.IndexSignature)[method](path.toLowerCase(), getMiddleware(handlerClassName), controller[controllerFunction]);
    next();
};

export async function setHeaders(req: Request, res: Response, next: NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
};

function getMiddleware(handlerClassName: string) {
    return new (Middleware as type.IndexSignature)[`${handlerClassName}Middleware`]()["use"];
};

function getMigration(handlerClassName: string) {
    return new (Migration as type.IndexSignature)[`${handlerClassName}Migration`]()["migrate"];
};