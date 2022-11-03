
// Showing off bcrypt functions and how to use them

// const bcrypt = require('bcryptjs');

// const password = 'password'
// const salt = bcrypt.genSaltSync(20);
// const hashPassword = bcrypt.hashSync(password, salt)

// console.log("Salt: ", salt)
// console.log("Hash: ", hashPassword)

// if (bcrypt.compareSync(password, hashPassword)) {
//     return console.log("Passwords match!")
// }
// return console.log("Passwords don't match!")


 // Examples of RESTful routes
 
const routeGenerator = (resourceName, useAlternateMethods = false) => {
    if (useAlternateMethods) {
      console.log(`Browse\tGET\t/${resourceName}`);
      console.log(`Read\tGET\t/${resourceName}/:id`);
      console.log(`Edit\tPATCH\t/${resourceName}/:id`);
      console.log(`Add\tPOST\t/${resourceName}`);
      console.log(`Delete\tDELETE\t/${resourceName}/:id`);
    } else {
      console.log(`Browse\tGET\t/${resourceName}`);
      console.log(`Read\tGET\t/${resourceName}/:id`);
      console.log(`Edit\tPOST\t/${resourceName}/:id`);
      console.log(`Add\tPOST\t/${resourceName}`);
      console.log(`Delete\tPOST\t/${resourceName}/:id/delete`);
    }
  };
  
  routeGenerator('dinosaurs');
  console.log();
  routeGenerator('dinosaurs', true);
