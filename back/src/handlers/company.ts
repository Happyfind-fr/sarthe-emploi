import { Company } from '../database/models';
import { Request, Response } from "express";
import { Formatter } from '../services';

export default class CompanyControllers {

    async get(req: { params: { id: number; } }, res: Response) {
        try {
            return res.send({ data_result: await new Company({ id: req.params.id }).getCompanyById() });
        } catch (error) { throw error; };
    };

    async get_all(req: Request, res: Response) {
        try {
            const data: any = await new Formatter().checkQuery(req)
            return res.send({ data_result: await new Company({}).getAllCompanies(data.pagesize, data.oldlimit) });
        } catch (error) { throw error; };
    };

    async post_create(req: { body: { siret: number, name: string, city: string, logo?: string, email: string, isVerified: boolean, recruiter: number } }, res: Response) {
        let { siret, name, city, logo, email, isVerified, recruiter } = req.body;
        try {
            return res.send({ data_result: await new Company({ siret, name, city, logo, email, isVerified, recruiter }).createCompany() });
        } catch (error) { throw error; };
    };

    async put_update(req: { body: { siret: number, name: string, city: string, logo?: string, email: string, isVerified?: boolean, recruiter: number }, params: { id: number }; }, res: Response) {
        const { siret, name, city, logo, email, isVerified, recruiter } = req.body;
        try {
            return res.send({ data_result: await new Company({ id: req.params.id, siret, name, city, logo, email, isVerified, recruiter }).updateCompany() });
        } catch (error) { throw error; };
    };

    async delete(req: { params: { id: number; }; }, res: Response) {
        try {
            return res.send({ data_result: new Company({ id: req.params.id }).deleteCompany() });
        } catch (error) { throw error; };
    };

    async post_custom(req: any, res: any) {

    }


}