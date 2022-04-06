const client = require('./db')

const getCats = () => {
    return client.query(`SELECT * FROM dino_cats ORDER BY id`).then((response) => {
        console.log(response.rows)
        return response.rows;
    })
}
const getCatById = (id) => {
    return client.query('SELECT * FROM dino_cats WHERE id = $1',[id]).then((response) => {
        console.log(response.rows[0]);
        return response.rows[0];
    })
}

module.exports ={ getCats, getCatById }
// case 'edit':
//     const newName = args[2];
//     client.query('UPDATE dino_cats SET name = $2 WHERE id = $1',[id, newName]).then(() => {
//         console.log("Dino Cat Updated");
//         client.end();
//     })
//     break;
// case 'add':
//     const newerName = args[1];
//     const diet = args[2];
//     client.query('INSERT INTO dino_cats (name, diet) VALUES ($1,$2)', [newerName, diet]).then(() => {
//         console.log("Dino Cat Created!");
//         client.end();
//     })
//     break;
// case 'delete':
//     client.query('DELETE FROM dino_cats WHERE id = $1;', [id]).then(() => {
//         console.log("Dino Cat Destroyed!");
//         client.end();
//     })
//     break;