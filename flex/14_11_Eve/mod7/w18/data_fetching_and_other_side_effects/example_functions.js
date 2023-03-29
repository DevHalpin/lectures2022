let number = 0
let firstName = "David"

const add = (num1) => {
    return (num1 + number)
}
const add2 = (num1, num2) => {
    return (num1 + num2)
}

const multiply = (num1) => {
    return num1 * 2
}

const setTitle = () => {
    document.title = "Hello World!"
}

const wait10SecondsThenSayHi = () => {
    setTimeout(() => {
        console.log("Hello World!")
    }, 10)
}

const printToScreen = (message) => {
    console.log(message);
}

const joinName = (lastName) => {
    return firstName + lastName;
}

import fs from 'fs';

const readFile = (path, callback) => {
    fs.readFile(path, (err,data) => {
        if (err) {
            return callback(err, null)
        }
        callback(null, data)
    })
}
