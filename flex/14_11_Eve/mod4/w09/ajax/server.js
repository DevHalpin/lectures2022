const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const dinoData = require("./data/dinoCats.json");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

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
  res.status(200).send(dinoCat);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
