import { Token } from "../database/models";
import { faker } from '@faker-js/faker';
// test
export default class TokenMigration {
    async migrate(req: any, res: any) {
        const number = 5
        for (let i = 0; i < number; i++) {
            await new Token(
                {
                    name: faker.company.name(),
                    value: faker.internet.password()
                }).createToken();

        }
        res.status(200).send({ "boom": "boom" });
    }
}

