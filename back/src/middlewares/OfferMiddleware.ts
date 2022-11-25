import { NextFunction, Request, Response } from "express";

export default class OfferMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        // switch (req.path) {
        //     case value:
        //         this.
        //         break;

        //     default:

        //         break;
        // }
        console.log("ok check offer");

        next();
    }
}