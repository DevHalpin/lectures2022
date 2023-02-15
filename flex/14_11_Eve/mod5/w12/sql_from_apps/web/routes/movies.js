const express = require('express');
const router = express.Router();

const {
    getMovies, getMovieById, editMovieById, addMovie, deleteMovie,
} = require('../database/queries');

router.get('/', (req, res) => {
    getMovies().then((data) => {
        res.json(data);
    })
});

router.get('/:id', (req, res) => {
    getMovieById(req.params.id).then((data) => {
        res.json(data);
    });
});


router.post('/add', (req, res) => {
    const name = req.body.name;
    const year = req.body.year;
    const genre = req.body.genre;
    const runTime = req.body.runTime;
    console.log("Req",req.body)
    addMovie(name, Number(year), genre, Number(runTime)).then((data) => {
        res.json(data);
    });
});

router.post('/delete', (req, res) => {
    deleteMovie(req.body.id).then((data) => {
        res.json(data)
    });
});
router.post('/:id', (req, res) => {
    const name = req.body.name;
    editMovieById(req.params.id, name).then((data) => {
        res.json(data);
    });
});

router.get('/form/:id', (req, res) => {
    const templateVars = { id: req.params.id};
    res.render("index", templateVars);
});

module.exports = router;