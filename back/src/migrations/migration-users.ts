import { User } from "../database/models/";
import { faker } from '@faker-js/faker';

export default class UserMigration {
    async migrate(req: any, res: any) {
        const number = 20
        for (let i = 0; i < number; i++) {
            await new User(
                {
                    firstName: faker.name.firstName(), lastName: faker.name.lastName(),
                    email: faker.internet.email(), password: faker.internet.password()
                }).createUser();

        }
        res.status(200).send({ "boom": "boom" });
    }
}

