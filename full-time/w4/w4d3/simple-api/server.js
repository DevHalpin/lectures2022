const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(morgan('dev'));

const dinoCats = require('./data/dinoCats.json')

app.get('/dinoCats', function(req,res) {
    res.json(dinoCats)
})

app.post('/dinoCats', function(req,res) {
    const {size, colour, weight, tail, prey, temperament} = req.body

    const dinoCat = {
        size,
        colour,
        weight,
        tail,
        prey,
        temperament
    }

    dinoCats.push(dinoCat)
    setTimeout(() => {
    res.status(201).send(dinoCat)
    }, 3000)
} )

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});