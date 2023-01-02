import { Request, Response, NextFunction } from "express";
import { Formatter } from './services';
import * as Handler from './handlers';
import * as Migrations from './migrations';
import * as Middleware from './middlewares';
import * as type from './types';
import dotenv from 'dotenv';

export async function requestHandler(this: ThisType<type.IndexSignature>, req: Request, res: Response, next: NextFunction) {
    
    dotenv.config();

    let path = req.url;    
    if (path === "/") return new Formatter().sendCustomResponse(res, 418, "path error");
    
    const pathComponents = path.split('/');
    const method = req.method.toLowerCase();
    const handlerClassName = await new Formatter().upperFirstChar(pathComponents[1].split("/")[0])
    const func = pathComponents[2].split("?")[0]    
    const controllerFunction = (["get", "delete"].includes(func)) ? func : `${method}_${func}`;
    const { ENV, ALLOWED_METHODS } = process.env
    console.log(func, handlerClassName, path);
    
    if (handlerClassName.length < 3 || !Object.keys(Handler).includes(handlerClassName))
        return new Formatter().sendCustomResponse(res, 418, "error handlerclassname");

    if(func === `migrate` && ENV === "local")
        return (this as type.IndexSignature)[method](`/api${path.toLowerCase()}`, getMigration(handlerClassName)) && next();
         
    if (!Object.getOwnPropertyNames((Handler as type.IndexSignature)[handlerClassName]?.prototype).slice(1).includes(controllerFunction))
        return new Formatter().sendCustomResponse(res, 418, "error function");

    if ((ALLOWED_METHODS!.split(',').some(item =>
        item.substring(0, 3) === controllerFunction?.substring(0, 3) &&
        item.substring(0, 3) === method.substring(0, 3)) &&
        method.substring(0, 3) === controllerFunction?.substring(0, 3)) === false) {
        return new Formatter().sendCustomResponse(res, 418, 'METHOD NOT ALLOWED');
    }

    path = pathComponents.length > 3 ? `/api/${pathComponents[1]}/${func}/:id` : `/api${path}`;        
    let controller = new (Handler as type.IndexSignature)[handlerClassName]();    
    (this as type.IndexSignature)[method](path.split("?")[0].toLowerCase(), getMiddleware(handlerClassName), controller[controllerFunction]);
    next();
}

export async function setHeaders(req: Request, res: Response, next: NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
}

function getMiddleware(handlerClassName: string) {
    return new (Middleware as type.IndexSignature)[`${handlerClassName}Middleware`]()["use"];
}

function getMigration(handlerClassName: string) {
    return new (Migrations as type.IndexSignature)[`${handlerClassName}Migration`]()["migrate"];
}