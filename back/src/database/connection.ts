import { Pool, Client } from 'pg';
require('dotenv').config();

const pool = new Pool({
    max: 2000,
    connectionString: process.env.POSTGRES_CONNECTION,
    idleTimeoutMillis: 30000
});
export const client = new Client(`${process.env.POSTGRES_CONNECTION}`)
export default pool