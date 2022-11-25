import { NextFunction, Request, Response } from "express";

export default class TokenMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        // switch (req.path) {
        //     case value:
        //         this.
        //         break;

        //     default:

        //         break;
        // }
        console.log("ok check token");

        next();
    }
}