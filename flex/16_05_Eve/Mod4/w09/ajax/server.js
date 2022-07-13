const express = require("express");
const morgan = require("morgan");
const dinoData = require("./data/dinoCats.json");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/dinoData", (req, res) => {
  res.json(dinoData);
});

app.post("/dinoCats", (req, res) => {
  const { clawLength, speed, diet, numOfHeads, jumpHeight } = req.body;

  const dinoCat = {
    clawLength,
    speed,
    diet,
    numOfHeads,
    jumpHeight,
  };

  dinoData.push(dinoCat);
  setTimeout(() => {
    res.status(200).send(dinoCat);
  }, 3000);
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
