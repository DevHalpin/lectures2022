const client = require("./db");

const getMovies = () => {
  return client.query(`SELECT * FROM fav_movies`).then((response) => {
    console.log(response.rows);
    return response.rows;
  });
};

const getMovieById = (id) => {
  return client
    .query(`SELECT * FROM fav_movies WHERE id = $1`, [id])
    .then((response) => {
      console.log(response.rows);
      return response.rows;
    });
};

const editMovieById = (id, newName) => {
  return client
    .query(`UPDATE fav_movies SET name = $2 WHERE id = $1 RETURNING *`, [
      id,
      newName,
    ])
    .then((response) => {
      console.log(response.rows);
      return response.rows;
    });
};

const addMovie = (newerName, year, genre, runTime) => {
    console.log(newerName, year, genre, runTime);
  return client
    .query(
      `INSERT INTO fav_movies (name, year, genre, run_time) VALUES ($1, $2, $3, $4) RETURNING *`,
      [newerName, year, genre, runTime]
    )
    .then((response) => {
      console.log(response.rows);
      return response.rows;
    });
};

const deleteMovie = (id) => {
  return client
    .query(`DELETE FROM fav_movies WHERE id = $1 RETURNING *`, [id])
    .then((response) => {
      console.log(response.rows);
      return response.rows;
    });
};

module.exports = {
  getMovies,
  getMovieById,
  editMovieById,
  addMovie,
  deleteMovie,
};
