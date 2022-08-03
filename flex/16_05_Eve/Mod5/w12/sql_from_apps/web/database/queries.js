const client = require("./db");

const getCats = () => {
  return client
    .query(`SELECT * FROM dino_cats ORDER BY id`)
    .then((response) => {
      console.log(response.rows);
      return response.rows;
    });
};

const getCatById = (id) => {
  return client
    .query(`SELECT * FROM dino_cats WHERE id = $1`, [id])
    .then((response) => {
      console.log(response.rows[0]);
      return response.rows[0];
    });
};

const editCatById = (id, newName) => {
  return client
    .query(`UPDATE dino_cats SET name = $2 WHERE id = $1 RETURNING *`, [
      id,
      newName,
    ])
    .then((response) => {
      console.log(response.rows[0]);
      return response.rows[0];
    });
};

const addCat = (name, diet) => {
  console.log("name", name);
  console.log("diet", diet);
  return client
    .query(`INSERT INTO dino_cats (name, diet) VALUES($1, $2) RETURNING *`, [
      name,
      diet,
    ])
    .then((response) => {
      console.log(response.rows[0]);
      return response.rows[0];
    });
};

const deleteCat = (id) => {
  return client.query("DELETE FROM dino_cats WHERE id = $1", [id]).then(() => {
    console.log("Dino Cat Destroyed");
    return "Dino Cat Destroyed";
  });
};

module.exports = { getCats, getCatById, editCatById, addCat, deleteCat };
