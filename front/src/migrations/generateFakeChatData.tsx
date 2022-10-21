import { faker } from '@faker-js/faker';
export const generateFakeChatData = () => {
    let table: any = [];
    for (let i = 0; i < 7; i++) {
        let object = {
            message: `${faker.lorem.sentence()}`, direction: i % 2 === 0 ? 'left' : 'right',
            time: faker.date.recent(), avatar: faker.image.avatar()
        }
        table.push(object);
    }
    return table;
}