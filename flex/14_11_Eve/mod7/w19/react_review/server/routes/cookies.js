const express = require("express");
const router = express.Router();
const data = require("../data/cookieData");

// console.log(data);
//Browse, Read, Edit, Add, Delete

//Browse
router.get("/", (req, res) => {
  res.json(data);
});

// Read
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const cookie = data.find(cookie => cookie.id === id);
  res.json(cookie);
});

//Edit
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const newCalories = req.body.calories;
  const cookie = data.find(cookie => cookie.id === id);
  // data[id].calories = newCalories
  cookie.calories = newCalories;
  res.json(cookie);
});

//Add
router.post("/", (req, res) => {
  const newCookie = req.body;
  const randomId = Math.random().toString(36).substring(2, 6);
  
  newCookie.id = randomId;
  console.log(newCookie)
  data.push(newCookie);

  res.json(newCookie);
});

//Delete
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  delete data[id];

  res.json({ success: true });
});

module.exports = router;
