const express = require("express");
const router = express.Router();

const {
  getCats,
  getCatById,
  editCatById,
  addCat,
  deleteCat,
} = require("../database/queries");

router.get("/", (req, res) => {
  getCats().then((data) => {
    res.json(data);
  });
});

router.get("/:id", (req, res) => {
  getCatById(req.params.id).then((data) => {
    res.json(data);
  });
});

router.post("/add", (req, res) => {
  const name = req.body.name;
  const diet = req.body.diet;
  addCat(name, diet).then((data) => {
    res.json(data);
  });
});

router.post("/delete/", (req, res) => {
  deleteCat(req.body.id).then((data) => {
    res.send(data);
  });
});

router.post("/:id", (req, res) => {
  const name = req.body.name;
  editCatById(req.params.id, name).then((data) => {
    res.json(data);
  });
});

router.get("/form/:id", (req, res) => {
  const templateVars = { id: req.params.id };
  res.render("index", templateVars);
});

module.exports = router;
