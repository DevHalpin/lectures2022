const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use((req,res,next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    console.log(`Incoming Response: ${res.statusCode}`);
    next();
})

app.use(morgan('dev'));

app.get('/', (req,res) => {
    res.send('Hello World!');
})

app.get('/users', (req,res) => {
    res.send('the users endpoint');
});

app.listen(port, () => {
    console.log(`Listening on port ${port} `);
})