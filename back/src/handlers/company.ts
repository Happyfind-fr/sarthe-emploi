import { Company } from '../database/models';
import { Request, Response } from "express";

export default class CompanyControllers {

    async get(req: { params: { id: number; } }, res: Response) {
        try {
            return res.send({ data_result: await new Company({ id: req.params.id }).getCompanyById() });
        } catch (error) { throw error; };
    };

    async getAll(req: Request, res: Response) {
        try {
            return res.send({ data_result: await new Company({}).getAllCompanies() });
        } catch (error) { throw error; };
    };

    async create(req: { body: { siret: number, name: string, city: string, logo?: string, email: string, isVerified: boolean, recruiter: number } }, res: Response) {
        const { siret, name, city, logo, email, isVerified, recruiter } = req.body;
        try {
            return res.send({ data_result: await new Company({ siret, name, city, logo, email, isVerified, recruiter }).createCompany() });
        } catch (error) { throw error; };
    };

    async update(req: { body: { siret: number, name: string, city: string, logo?: string, email: string, isVerified?: boolean, recruiter: number }, params: { id: number }; }, res: Response) {
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


}