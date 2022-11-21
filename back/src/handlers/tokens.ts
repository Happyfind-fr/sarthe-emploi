import { Token } from '../database/models';
import { Request, Response } from "express";

export default class TokenControllers {

    async getAll(req: Request, res: Response) {
        try {
            return res.send({ data_result: await new Token({}).getAllTokens() });
        } catch (error) { throw error; };
    };

    async create(req: { body: { name: string, value: string, scope?: string } }, res: Response) {
        const { name, value, scope } = req.body;
        try {
            return res.send({ data_result: await new Token({ name, value, scope }).createToken() });
        } catch (error) { throw error; };
    };

    async delete(req: { params: { id: number; }; }, res: Response) {
        try {
            return res.send({ data_result: new Token({ id: req.params.id }).deleteAllTokens() });
        } catch (error) { throw error; };
    };

}