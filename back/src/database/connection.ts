import { Pool } from 'pg';

require('dotenv').config();

export const client = new Pool({ max: 2000, connectionString: process.env.POSTGRES_CONNECTION, idleTimeoutMillis: 30000 });
