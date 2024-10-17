
import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tally',
  password: 'a123',
  port: 5432,
});

export const query = (text: string, params?: any[]) => pool.query(text, params);