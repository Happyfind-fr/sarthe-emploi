import { NextFunction, Request, Response } from "express";

export default class UserMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        // switch (req.path) {
        //     case value:
        //         this.
        //         break;
        
        //     default:

        //         break;
        // }
        next();
    }

    async AdminMd(req: any, res: any, next: any) {
        if (process.env.ENV === 'local' && req.hostname === 'localhost') {
            next();
        } else {
            next();
        }
    }
}