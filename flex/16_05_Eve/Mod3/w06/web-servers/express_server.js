const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

console.log("Morgan", morgan("dev"));

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(`New request: ${req.method} ${req.url}`);
  next();
});

app.get("/", (request, response) => {
  response.cookie("Cookie", "David");
  console.log(request.cookies);
  response.send("This is the homepage");
});

app.get("/about", (request, response) => {
  response.send("This is the about page. ");
});

app.post("/users", (request, response) => {
  const data = request.body;
  console.log(data);
  //database code here
  response.status(200);
  response.send("Hi");
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
