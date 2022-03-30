const bcrypt = require('bcryptjs');

const password = "password";

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);

console.log("Salt",salt);
console.log("Hash",hash)

const compare = bcrypt.compareSync(hash, password);

console.log("Compare", compare)
