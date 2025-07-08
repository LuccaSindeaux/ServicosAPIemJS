const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "Lucc@08516",
    host: "localhost",
    port: 5432, 
    database: "yugioh_db"
});

async function connect() {
    return await pool.connect();
}

module.exports = {
    connect
};