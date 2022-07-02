const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync();

console.log("Salt", salt);

const password = bcrypt.hashSync("password", salt);

console.log("Password", password);

const comparePassword = bcrypt.compareSync("passwodrd", password);

console.log("Compared Password", comparePassword);
