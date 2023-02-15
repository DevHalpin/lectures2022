const pg = require("pg");

const config = {
  user: "labber",
  password: "labber",
  database: "testdb",
  host: "localhost",
  port: 5432,
};

const args = process.argv.slice(2);
const verb = args[0];
const id = args[1];

const client = new pg.Client(config);

client
  .connect()
  .then(() => console.log(`DB is running on port ${config.port}`));

switch (verb) {
  case "browse":
    client.query(`SELECT * FROM fav_movies`).then((response) => {
      console.log(response.rows);
      client.end();
    });
    break;
  case "read":
    client.query(`SELECT * FROM fav_movies WHERE id = $1`, [id]).then((response) => {
        console.log(response.rows);
        client.end();
    })
    break;
  case "edit":
    const newName =args[2];
    client.query(`UPDATE fav_movies SET name = $2 WHERE id = $1 RETURNING *`, [id, newName]).then((response) => {
        console.log(response.rows);
        client.end();
    })
    break;
  case "add":
    const newerName = args[1];
    const year = args[2];
    const genre = args[3];
    const runTime = args[4];
    client.query(`INSERT INTO fav_movies (name, year, genre, run_time) VALUES ($1, $2, $3, $4) RETURNING *`, [newerName, year, genre, runTime]).then((response) => {
        console.log(response.rows);
        client.end();
    })
    break;
  case "delete":
    client.query(`DELETE FROM fav_movies WHERE id = $1`, [id]).then((response) => {
        console.log(response.rows);
        client.end();
    })
    break;
  default:
    console.log("Please use a valid verb.");
    client.end();
}
