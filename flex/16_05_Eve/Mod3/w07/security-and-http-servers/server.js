const express = require("express");
const morgan = require("morgan");
var cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const methodOverride = require("method-override");
const languages = require("./languages.json");

const app = express();
const port = 8765;
const users = {};

app.use(methodOverride("_method"));
app.use(
  cookieSession({
    name: "session",
    keys: ["totallysecretinfo"],
  })
);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

const generateRandomString = () => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const getUserByID = (id) => {
  for (const userId in users) {
    if (userId === id) {
      return users[userId];
    }
  }
  return null;
};

const getUserByEmail = (email) => {
  for (const userId in users) {
    if (users[userId].email === email) {
      return users[userId];
    }
  }
  return null;
};

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/home", (req, res) => {
  console.log(req.session);
  const userLanguage = req.session.language || "en";
  const templateVars = {
    heading: languages.homeHeadings[userLanguage],
    body: languages.homeBodies[userLanguage],
  };
  res.render("home", templateVars);
});

app.get("/about", (req, res) => {
  const userLanguage = req.session.language || "en";
  const templateVars = {
    heading: languages.aboutHeadings[userLanguage],
    body: languages.aboutBodies[userLanguage],
  };
  res.render("about", templateVars);
});

app.get("/language/:userLanguage", (req, res) => {
  req.session.language = req.params.userLanguage;
  res.redirect("/home");
});

app.get("/login", (req, res) => {
  const user = getUserByID(req.session.userId);
  if (user) {
    return res.redirect("/protected");
  }
  res.render("login");
});

app.get("/register", (req, res) => {
  const user = getUserByID(req.session.userId);
  if (user) {
    return res.redirect("/protected");
  }
  res.render("register");
});

app.get("/protected", (req, res) => {
  const user = getUserByID(req.session.userId);

  if (user) {
    const templateVars = {
      user: user,
    };
    return res.render("protected", templateVars);
  }

  res
    .status(401)
    .send(
      'You are not allowed to be here.  Please <a href="/login">login!</a> '
    );
});

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync();

  const foundUser = getUserByEmail(email);

  if (foundUser) {
    return res.status(400).send("A user with that email already exists!");
  }

  const id = generateRandomString();
  const newUser = {
    id,
    email,
    password: bcrypt.hashSync(password, salt),
  };
  users[id] = newUser;

  console.log(users);

  res.redirect("/login");
});

app.delete("/login", (req, res) => {
  const { email, password } = req.body;

  const foundUser = getUserByEmail(email);

  console.log(foundUser);

  if (!foundUser || !bcrypt.compareSync(password, foundUser.password)) {
    return res.status(400).send("Incorrect username or password!");
  }
  req.session.userId = foundUser.id;
  res.redirect("/home");
});

app.get("/logout", (req, res) => {
  req.session = null;
  res.redirect("/home");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
