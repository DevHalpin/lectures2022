const express = require("express");
const morgan = require("morgan");
var cookieSession = require('cookie-session')
const bcrypt = require('bcryptjs');


const app = express();
const port = process.env.PORT || 3001;

app.use(morgan("dev")); // (req, res, next)
app.use(cookieSession({
  name: 'session',
  keys: ["totallysecretkey","totallysecretkey2"],

}))
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.set("view engine", "ejs");

const users = {};

// const userRouter = require("./routes/userRoute")
// app.use('/users', userRouter)

// GET /home
app.get("/home", (req, res) => {
  res.render("home");
});

// GET /about
app.get("/about", (req, res) => {
  res.render("about");
});

// GET /register
app.get("/register", (req, res) => {
  res.render("register");
});

// POST /register
app.post("/register", (req, res) => {
  // console.log(req.body);

  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password);
  const id = Math.random().toString(36).substring(2, 6);

  const user = {
    id: id,
    email: email,
    password: hashedPassword,
  };

  users[id] = user;
  console.log(users);

  res.redirect("/login");
});

// GET /login
app.get("/login", (req, res) => {
  res.render("login");
});

// POST /login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // check if email or password are falsey
  if (!email || !password) {
    return res.status(400).send("please enter an email address AND a password");
  }

  // look up the user in the users database
  let foundUser = null;
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      foundUser = user;
    }
  }

  // did we find a user???
  if (!foundUser) {
    return res.status(403).send("no user with that email exists");
  }

  // check if passwords match
  if (!bcrypt.compareSync(password, foundUser.password)) {
    return res.status(401).send("wrong password");
  }

  // we found a user; we need to set the cookie
  req.session.userId = foundUser.id;

  // send the user somewhere
  res.redirect("/protected");
});

// GET /protected
app.get("/protected", (req, res) => {
  console.log(req.session);
  const userId = req.session.userId;
  if (userId) {
    const user = users[userId];

    const templateVars = {
      user: user,
    };

    return res.render("protected", templateVars);
  }
  res.redirect("/login");
});

// POST /logout
app.post("/logout", (req, res) => {
  req.session = null;

  // send the user somewhere
  res.redirect("/home");
});

app.delete("/logout", (req, res) => {
  req.session = null;

  // send the user somewhere
  res.redirect("/home");
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});