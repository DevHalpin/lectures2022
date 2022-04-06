const express = require('express');
const router = express.Router();
// const {Router } = require('express')
const { getCats, getCatById } = require('../database/queries');

router.get('/', (req, res) => {
    getCats().then((data) => {
        res.json(data)
    });
});

router.get('/:id', (req,res) => {
    getCatById(req.params.id).then((data) => {
        res.json(data)
    })
});

module.exports = router;

