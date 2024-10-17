import { pool } from "./db";

const createTables = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL
        );
    `;
    await pool.query(query);
    console.log('Tables created');
};

export { createTables };