// postgres://user:password@host/database
require('dotenv').config()
const pg = require('pg');

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
    host: process.env.DB_HOST,
    port: 5432
};

const client = new pg.Client(config);

const args = process.argv.slice(2);
const verb = args[0];
const id = args[1];

client.connect().then(() => console.log(`Server is running on port ${config.port}`))

switch (verb) {

    case 'browse':
        client.query(`SELECT * FROM dino_cats ORDER BY id`).then((response) => {
            console.log(response.rows)
            client.end();
        })
        break;
    case 'read':
        
        client.query('SELECT * FROM dino_cats WHERE id = $1',[id]).then((response) => {
            console.log(response.rows[0]);
            client.end();
        })
        break;
    case 'edit':
        const newName = args[2];
        client.query('UPDATE dino_cats SET name = $2 WHERE id = $1',[id, newName]).then(() => {
            console.log("Dino Cat Updated");
            client.end();
        })
        break;
    case 'add':
        const newerName = args[1];
        const diet = args[2];
        client.query('INSERT INTO dino_cats (name, diet) VALUES ($1,$2)', [newerName, diet]).then(() => {
            console.log("Dino Cat Created!");
            client.end();
        })
        break;
    case 'delete':
        client.query('DELETE FROM dino_cats WHERE id = $1;', [id]).then(() => {
            console.log("Dino Cat Destroyed!");
            client.end();
        })
        break;

    default:
        console.log("Please use a valid verb.");
        client.end();
}



