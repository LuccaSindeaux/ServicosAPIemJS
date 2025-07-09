const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "123456",
    host: "localhost",
    port: 5433, //em casa 5432
    database: "yugioh_db"
});

async function connect() {
    return await pool.connect();
}

module.exports = {
    connect
};