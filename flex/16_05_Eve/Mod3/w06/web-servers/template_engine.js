const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const templateVars = {
    message: "This is a different message",
    username: "Carol",
    age: 40,
  };

  res.render("index", templateVars);
});

app.listen(port, () => {
  console.log("App is listening on port ", port);
});
