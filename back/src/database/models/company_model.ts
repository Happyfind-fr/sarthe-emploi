import { create, getAll, getOne, update, remove } from '../requests';

export class Company {
    id: number; siret: number; name: string; city: string; logo: string;
    email: string; isVerified: boolean; recruiter: number;

    constructor(Company: Partial<Company>) { Object.assign(this, Company) };

    async getAllCompanies(pageSize:number, oldLimit:number,query?: string) {
        const data = await getAll(pageSize, oldLimit, "companies", query);
        return data.rows;
    };

    async getCompanyById(query?: string) {
        const data = await getOne("companies", this.id!, query);
        return data.rows;
    };

    async createCompany() {
        let columns: any = [];
        let values: any = [];
        Object.entries(this).forEach(kv => kv[1] === '' || kv[1] === undefined ? '' : (columns.push(kv[0]) && values.push(typeof kv[1] === "number" || typeof kv[1] === 'boolean' ? kv[1] : `${kv[1]}`)))
        const data = await create("companies", columns, values);
        return data.rows;
    };

    async updateCompany() {
        let columns: any = [];
        let values: any = [];
        Object.entries(this).forEach(kv => kv[1] === undefined || kv[1] === '' || kv[0] === 'id' ? '' : (columns.push(kv[0]) && values.push(kv[1])));
        const data = (columns.length === 0 || values.length === 0) ? { rows: ["null"] } : await update("companies", columns, values, this.id!);
        return data.rows;
    };

    async deleteCompany() {
        const data = await remove("companies", this.id!);
        return data.rows;
    };

}