const express = require('express');
const morgan = require('morgan');
const movies = require('./routes/movies')

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true}));

const PORT = process.env.PORT || 3000;

app.use('/movies', movies);

app.get('/', (req, res) => {
    res.send("Hello world!")
});

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})

