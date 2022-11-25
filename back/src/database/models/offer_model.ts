import { create, getAll, getOne, update, remove } from '../requests';

export class Offer {
    id?: number; title?: string; description?: string; companyName?: string; companyLocation?: string;
    contractType?: string; contractStartDate?: number; contractEndDate?: number; weeklyHoursRate?: number;
    annualRawSalary?: number; toBeFilled?: number; wage?: number;

    constructor(offer: Partial<Offer>) { Object.assign(this, offer) };

    async getAllOffers(query?: string) {
        const data = await getAll("offers", query);
        return data.rows;
    };

    async getOfferById(query?: string) {
        const data = await getOne("offers", this.id!, query);
        return data.rows;
    };

    async createOffer() {
        let columns: any = [];
        let values: any = [];
        Object.entries(this).forEach(kv => kv[1] === '' || kv[1] === undefined ? '' : (columns.push(kv[0]) && values.push(typeof kv[1] === 'number' || typeof kv[1] === 'boolean' ? kv[1] : `${kv[1]}`)))
        const data = await create("offers", columns, values);
        return data.rows;
    };

    async updateOffer() {
        let columns: any = [];
        let values: any = [];
        Object.entries(this).forEach(kv => kv[1] === undefined || kv[1] === '' || kv[0] === 'id' ? '' : (columns.push(kv[0]) && values.push(kv[1])));
        const data = await update("offers", columns, values, this.id!);
        return data.rows;
    };

    async deleteOffer() {
        const data = await remove("offers", this.id!);
        return data.rows;
    };

}