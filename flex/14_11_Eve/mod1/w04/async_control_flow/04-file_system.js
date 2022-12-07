// sync
// const fs = require('fs');

// const data = fs.readFileSync('./sample.html');
// console.log(data);

// console.log("Hi, I'm here!");

//async
const cb = (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
}

fs.readFile('./sample.html', {encoding: 'utf8'}, cb)

console.log("Hi, I'm here!")

