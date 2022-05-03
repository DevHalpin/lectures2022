"use strict";

/* Question 03

Write a function which takes in two file paths and can sum the numbers found in each file.

For example,

Given:
- filePath1 points to a txt file which contains "42"
- filePath2 points to a txt file which contains "24"

Then:
- call the callback with the number 66

The callback should be called with two arguments (an error object, followed by data) as is typical in Node. The data passed in should therefore be the second argument, not the first.

The callback should be called with two arguments:
1. error: if there is an fs error, pass it through to this callback. otherwise set this argument to null
2. data: if there is no error, this should be the sum (number). If there is an error, this should be set to null.

- The function should support negative and decimal point numbers.
- Don't worry about other edge cases. For example, you can assume that if the given files are there, they WILL contain valid numbers.

*/
const fs = require("fs");
// const fs = require("fs").promises;

const sumFileData = function (filePath1, filePath2, callback) {
  fs.readFile(filePath1, "utf8", (err, data1) => {
    if (err) {
      return callback(err, null);
    }
    const num1 = Number(data1);
    console.log("Number 1", num1);
    fs.readFile(filePath2, "utf8", (err, data2) => {
      if (err) {
        return callback(err, null);
      }
      const num2 = Number(data2);
      console.log("Number 2", num2);
      const result = num1 + num2;
      callback(null, result);
      console.log("Result", result);
    });
  });
  // Promise based version of solution
  // Promise.all([fs.readFile(filePath1, "utf8"), fs.readFile(filePath2, "utf8")])
  //   .then((values) => {
  //     let result = 0;
  //     for (const value of values) {
  //       result += Number(value);
  //     }
  //     console.log("Result", result);
  //     return callback(null, result);
  //   })
  //   .catch((err) => {
  //     return callback(err, null);
  //   });
};

// Don't change below:
module.exports = { sumFileData };
