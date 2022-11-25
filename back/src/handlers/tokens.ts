import { Token } from '../database/models';
import { Request, Response } from "express";

export default class TokenControllers {
    async get(req: any, res: any) {

    }

    async get_all(req: Request, res: Response) {
        console.log(req)
        try {
            return res.send({ data_result: await new Token({}).getAllTokens() });
        } catch (error) { throw error; };
    };

    async post_create(req: { body: { name: string, value: string, scope?: string } }, res: Response) {
        const { name, value, scope } = req.body;
        try {
            return res.send({ data_result: await new Token({ name, value, scope }).createToken() });
        } catch (error) { throw error; };
    };

    async put_update(req: any, res: any) {

    }

    async delete(req: { params: { id: number; }; }, res: Response) {
        try {
            return res.send({ data_result: new Token({ id: req.params.id }).deleteAllTokens() });
        } catch (error) { throw error; };
    };


}