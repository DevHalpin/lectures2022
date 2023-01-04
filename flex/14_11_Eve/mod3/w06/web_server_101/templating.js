const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  const templateVars = {
    names: ['Bob', 'Joe', 'George'],
    message: "Hello class",
    username: "Bob",
    age: 25,
  };

  res.render("index", templateVars);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
