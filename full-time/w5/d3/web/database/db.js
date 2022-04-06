const pg = require('pg');

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
    host: process.env.DB_HOST,
    port: 5432
};

const client = new pg.Client(config);

client.connect().then(() => console.log(`Server is running on port ${config.port}`))

module.exports = client