require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const router = require("./routes/cats.js");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

// routes
app.use("/cats", router);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
