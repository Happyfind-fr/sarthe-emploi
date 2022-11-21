import { Client } from 'pg';

require('dotenv').config();
export const client = new Client({ connectionString: process.env.POSTGRES_CONNECTION });
client.connect();

