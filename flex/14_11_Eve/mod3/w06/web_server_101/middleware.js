const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Thanks for visiting this website');
})

app.get('/test', (req, res) => {
    res.send('Test');
})



app.listen(port, () => {
    console.log(`listening on port ${port}`);
})