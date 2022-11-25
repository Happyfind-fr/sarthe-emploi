import { Company } from "../database/models/";
import { faker } from '@faker-js/faker';
// test
export default class CompanyMigration {
    async migrate(req: any, res: any) {
        const number = 5
        for (let i = 0; i < number; i++) {
            await new Company(
                {
                    siret: Number(faker.finance.account(5)), name: faker.company.name(),
                    city: faker.address.city(), logo: faker.image.avatar(),
                    email: faker.internet.email(), isVerified: false, recruiter: Number(faker.finance.account(20))
                }).createCompany();

        }
        res.status(200).send({ "boom": "boom" });
    }
}

