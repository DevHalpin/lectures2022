const pg = require('pg');

const config = {
    user: "labber",
    password: "labber",
    database: "testdb",
    host: "localhost",
    port: 5432
};

const client = new pg.Client(config);

client.connect().then(() => {
    console.log(`DB is running on port ${config.port}`);
});

module.exports = client;