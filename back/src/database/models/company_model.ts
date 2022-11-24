import { create, getAll, getOne, update, remove } from '../requests';

export class Company {
    id: number; siret: number; name: string; city: string; logo: string;
    email: string; isVerified: boolean; recruiter: number;

    constructor(Company: Partial<Company>) { Object.assign(this, Company) };

    async getAllCompanies(query?: string) {
        const data = await getAll("companies", query);
        return data.rows;
    };

    async getCompanyById(query?: string) {
        const data = await getOne("companies", this.id!, query);
        return data.rows;
    };

    async createCompany() {
        let columns: any = [];
        let values: any = [];
        Object.entries(this).forEach(kv => kv[1] === '' || kv[1] === undefined ? '' : (columns.push(kv[0]) && values.push(typeof (kv[1]) === 'number' ? kv[1] : `"${kv[1]}"`)))
        const data = await create("companies", columns.toString(), values.toString());
        return data.rows;
    };

    async updateCompany() {
        const ar: any = [];
        Object.entries(this).forEach(kv => kv[1] === '' || kv[0] === 'id' ? '' : ar.push(` ${kv[0]} = '${kv[1]}'`));
        const data = await update("companies", `${ar.toString()}`, this.id!);
        return data.rows;
    };

    async deleteCompany() {
        const data = await remove("companies", this.id!);
        return data.rows;
    };

}