import { client } from './connection';
import { Formatter } from '../services';
export const create = async (table: string, columns: string, values: any) => {
    return await client.query(`INSERT INTO ${table} (${columns}) VALUES (${await new Formatter().textEscaper(values)}) RETURNING *;`);
};
export const update = async (table: string, values: string, id: number) => {
    return await client.query(`UPDATE ${table} SET ${values}  WHERE id= ${id};`);
};
export const remove = async (table: string, id: number) => {
    return await client.query(`DELETE FROM ${table} WHERE id=${id};`);
};
export const removeAll = async (table: string) => {
    return await client.query(`DELETE FROM ${table};`);
};
export const getOne = async (table: string, id: number, columns?: string) => {
    return await client.query(`SELECT ${columns ? columns : '*'} FROM ${table} WHERE id=${id};`);
};
export const getAll = async (table: string, columns?: string) => {
    return await client.query(`SELECT ${columns ? columns : '*'} FROM ${table}; `);
};