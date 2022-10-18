import { create, getAll, getOne, update, remove } from '../requests';
import { userProps } from '../../types';
export class User {
    lastName?: string; id: number; firstName?: string;
    avatar?: string; email?: string; password?: string;

    constructor(user: userProps) {
        this!.id = user.id || 0; this!.lastName = user.lastName || '';
        this!.firstName = user.firstName || ''; this!.avatar = user.avatar || '';
        this!.email = user.email || ''; this!.password = user.password || '';
    };

    async getAllUsers(query?: string) {
        const data = await getAll("users", query);
        return data.rows;
    };

    async getUserById(query?: string) {
        const data = await getOne("users", this.id, query);
        return data.rows;
    };

    async createUser() {
        const data = await create("users", "firstname,lastname,email,password",
            `'${this.lastName}', '${this.firstName}', '${this.email}', '${this.password}'`);
        return data.rows;
    };

    async updateUser() {
        const ar: any = [];
        Object.entries(this).forEach(kv => kv[1] === '' || kv[0] === 'id' ? '' : ar.push(` ${kv[0]} = '${kv[1]}'`));
        const data = await update("users", `${ar.toString()}`, this.id);
        return data.rows;
    };

    async deleteUser() {
        const data = await remove("users", this.id);
        return data.rows;
    };

}