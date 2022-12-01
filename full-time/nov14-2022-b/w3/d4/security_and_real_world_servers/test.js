const bcrypt = require('bcryptjs')

const password = 'password'
const salt = bcrypt.genSaltSync(10)
console.log(salt)
const hashedPassword = bcrypt.hashSync(password, salt);
// password + salt + hashing algorithm
console.log("Password", hashedPassword)
// // const hashedPasswordv2 = bcrypt.hashSync(password, 20)
// // console.log("Passwordv2", hashedPasswordv2)

// const isCorrectPassword = bcrypt.compareSync("password1", hashedPassword)
// // console.log(isCorrectPassword)

// const routeGenerator = (resourceName, useAlternateMethods = false) => {
//     if (useAlternateMethods) {
//       console.log(`Browse\tGET\t/${resourceName}`);
//       console.log(`Read\tGET\t/${resourceName}/:id`);
//       console.log(`Edit\tPATCH\t/${resourceName}/:id`);
//       console.log(`Add\tPOST\t/${resourceName}`);
//       console.log(`Delete\tDELETE\t/${resourceName}/:id`);
//     } else {
//       console.log(`Browse\tGET\t/${resourceName}`);
//       console.log(`Read\tGET\t/${resourceName}/:id`);
//       console.log(`Edit\tPOST\t/${resourceName}/:id`);
//       console.log(`Add\tPOST\t/${resourceName}`);
//       console.log(`Delete\tPOST\t/${resourceName}/:id/delete`);
//     }
//   };

// routeGenerator('cats', true)


