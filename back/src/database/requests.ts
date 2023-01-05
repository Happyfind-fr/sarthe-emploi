import { client } from './connection';
import { Formatter } from '../services';

export const create = async (table: string, columns: any[], values: any[]) => {
    return await client.query(`INSERT INTO ${table} (${columns.toString()}) VALUES (${await new Formatter().textEscaper(values)}) RETURNING *;`, values);
};
export const update = async (table: string, columns: any[], values: any[], id: number) => {
    return await client.query(`UPDATE ${table} SET (${columns.toString()}) = (${await new Formatter().textEscaper(values)}) WHERE id= ${id} RETURNING *;`, values);
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
export const getAll = async (pageSize:number, oldLimit:number, table: string, columns?: string) => {
    return await client.query(`SELECT ${columns ? columns : '*'} FROM ${table} ORDER BY id LIMIT ${pageSize} OFFSET ${oldLimit};`)
};