import { create, getAll, removeAll } from '../requests';
import { tokenProps } from '../../types';
export class Token {
    name: string; value: string; scope?: string;
    constructor(token: tokenProps) {
        this!.name = token.name || ''
        this!.value = token.value || '';
        this!.scope = token.scope || '';
    };

    async getAllTokens(query?: string) {
        const data = await getAll("tokens", query);
        return data.rows;
    };

    async createToken() {
        const data = await create("tokens", "name,value,scopes", [this.name,this.value,this.scope]);
        return data.rows;
    };

    async deleteAllTokens() {
        const data = await removeAll("tokens");
        return data.rows;
    };

}