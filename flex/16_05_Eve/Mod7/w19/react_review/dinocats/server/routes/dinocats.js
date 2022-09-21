const express = require('express');
const router = express.Router();

const dinoCats = require('../data/dinocats')

//Browse
router.get('/', (req, res) => {
    res.json(dinoCats);
})

//Read
router.get('/:id', (req,res) => {
    const id = req.params.id;
    const dinoCat= dinoCats[id]
    res.json(dinoCat)
})

//Edit
router.patch('/:id', (req,res) => {
    const id = req.params.id;
    const newVerticalLeap = req.body.verticalLeap;
    const dinoCat = dinoCats[id];
    dinoCat.verticalLeap = newVerticalLeap

    console.log("Dinocat", dinoCat)

    res.json(dinoCat)
})

//Add
router.post('/', (req,res) => {
    const newDinoCat = req.body;
    const randomId = Math.random().toString(36).substring(2, 6);
    
    newDinoCat.id = randomId;
    dinoCats[randomId] = newDinoCat;

    console.log("Dinocats", dinoCats)

    res.json(newDinoCat)
})

//Delete
router.delete('/:id', (req,res) => {
    const id = req.params.id;

    delete dinoCats[id]

    res.json({success: true})
})

module.exports = router;