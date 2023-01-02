import { create, getAll, getOne, update, remove } from '../requests';

export class User {
    lastName?: string; id: number; firstName?: string;
    avatar?: string; email?: string; password?: string;

    constructor(user: Partial<User>) {
        Object.assign(this, user);
    };

    async getAllUsers(pageSize:number, oldLimit:number, query?: string) {
        const data = await getAll(pageSize, oldLimit, "users", query);
        return data.rows;
    };

    async getUserById(query?: string) {
        const data = await getOne("users", this.id, query);
        return data.rows;
    };

    async createUser() {
        const data = await create("users", ["firstname,lastname,email,password"], [this.lastName, this.firstName, this.email, this.password]);
        return data.rows;
    };

    async updateUser() {
        let columns: any = [];
        let values: any = [];

        Object.entries(this).forEach(kv => kv[1] === undefined || kv[1] === '' || kv[0] === 'id' ? '' : (columns.push(kv[0]) && values.push(kv[1])));
        const data = await update("users", columns, values, this.id);
        return data.rows;
    };

    async deleteUser() {
        const data = await remove("users", this.id);
        return data.rows;
    };

}