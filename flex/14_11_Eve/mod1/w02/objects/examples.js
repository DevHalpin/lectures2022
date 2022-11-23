// console.log(myName)
// myName = 0
// console.log(myName)

// Writing out variables for each item is tedious and could get confusing with large amounts of data
const myName2 = "David";
const myAge = 36;
const isInstructor = true;

// Arrays are used for groups of the same info (like names)
const personArray = ["David", "Bob", "Sam"];

//Objects are used for information about the same item (like personal info)
const person1 = {
  name: "David",
  age: 36,
  isInstructor: true,
};

// Objects can be nested within objects
const person2 = {
  name: {
    personName: "David",
    David: "John",
  },
  age: 20,
  myName: "David",
};

// Creating object with constructor
const person3 = new Object();
// Creating object with constructor without the new keyword
const person5 = Object();
// Object literal
const person4 = {};

let myName = "David";

// Dot notations looks for key with exact wording (in this case a key called "myName")
person2.myName;
// Bracket notation with quotes does same as dot notation
person1["name"];
// Bracket without quotes will treat key inside as variable allowing dynamic properties
person1[myName]
// Can chain multiple properties to go deeper into an object
person2["name"][myName];


// Primitives are passed by value
// let age = 36;

// const printNum = (num) => {
//     num = num + 1
//     console.log(num)
// };

// printNum(age);
// console.log(age);

//Objects are passed by reference
// const david = {
//     name: "David",
//     age: 36,
//     isInstructor: true,
// };

// const printAge = (instructor) => {
//     instructor.age = instructor.age + 1;
//     console.log(instructor.age);
// }

// printAge(david);
// console.log(david.age);

// Functions can be used nested inside objects.  This is called a method
// const david = {
//     name: "David",
//     age: 36,
//     isInstructor: true,
//     sayHello: function() {
//         console.log("Hello")
//     }
// }

// david.sayHello();


// Use the "this" keyword to access properties on the same object
// const david = {
//   name: "David",
//   age: 36,
//   isInstructor: true,
//   method: {
//     sayHello: function () {
//       console.log("Hello");
//     },
//     makeYounger: function() {
//       console.log(this);
//       this.age = this.age - 1;
//     },
//   },
// };

// console.log(david.age);
// david.method.makeYounger();
// console.log(david.age);

// Use for..in loops to iterate over an object
// for (const key in david) {
//     console.log(david[key])
// }

// Use Object.keys, Object.values, or Object.entries to convert the keys, values, or both to an array so you can use a for..of loop
// for (const key of Object.entries(david)) {
//     console.log(key)
// }

