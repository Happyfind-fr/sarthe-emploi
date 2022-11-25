import { Offer } from "../database/models/";
import { faker } from '@faker-js/faker';

export default class OfferMigration {
    async migrate(req: any, res: any) {
        const number = 50
        for (let i = 0; i < number; i++) {
            await new Offer(
                {
                    title: faker.name.jobTitle(), description: faker.lorem.paragraph(),
                    companyName: faker.company.name(), companyLocation: `${faker.address.streetAddress()} ${faker.address.zipCodeByState("FR")}  ${faker.address.city()}`,
                    contractType: "cdd", contractStartDate: Date.now(), contractEndDate: Date.now()
                }).createOffer();
        }
        res.status(200).send({ "boom": "boom" });
    }
}

