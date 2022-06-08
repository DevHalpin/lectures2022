const fs = require('fs');

fs.readFile('./sample.html', {encoding: 'utf-8'},(err, data) => {
    if (err) {
        console.log(err);
    } else {
        fs.writeFile('./copy.html', data, {encoding: 'utf-8'}, (err) => {
            console.log(err)
        })
    }
})

// const data = fs.readFileSync('./sample.html', {encoding: 'utf-8'});

// console.log("ReadFileSync", data.length)