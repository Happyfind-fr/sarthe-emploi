import client from './connection';

export const create = async (table: string, columns: string, values: any) => {
    const request = await client.query(`INSERT INTO ${table} (${columns}) VALUES (${values}) RETURNING *;`);
    return request;
}

export const update = async (table: string, values: string, id: number) => {
    const request = await client.query(`UPDATE ${table} SET ${values}  WHERE id=${id} RETURNING *;`);
    return request;
}

export const remove = async (table: string, id: number) => {
    const request = await client.query(`DELETE FROM ${table} WHERE id=${id} RETURNING *;`);
    return request;
}

export const getOne = async (table: string, id: number, columns?: string) => {
    const request = await client.query(`SELECT ${columns ? columns : '*'} FROM ${table} WHERE id=${id};`);
    return request;
}

export const getAll = async (table: string, columns?: string) => {
    const request = await client.query(`SELECT ${columns ? columns : '*'} FROM ${table};`);
    return request;
}