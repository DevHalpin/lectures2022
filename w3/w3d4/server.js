//
// DO NOT USE THIS CODE
// IT HAS A SERIOUS SECURITY ISSUE, WHICH IS LEFT IN ON PURPOSE, FOR TEACHING PURPOSES
//

const express = require("express");
const PORT = 8081;
const morgan = require("morgan");
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const cookieSession = require('cookie-session')
const bcrypt = require("bcryptjs")
const methodOverride = require('method-override')

const app = express();
app.use(morgan('dev'));

app.set("view engine", "ejs");

let users = {'nally': bcrypt.hashSync("qwerty"), 'david': "$2a$10$aSIQkjbJqNo9B2nyYze12.Htm16n6Cr5PNu5/.pgTMDuBnRoxTa.S"};

//
// MIDDLEWARE
//

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: ["password", "key", "LHL"],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(methodOverride('_method'))

//
// ROUTES
//

// homepage
app.get("/", (req, res) => {
  res.render("homepage");
});

// register page
app.get("/register", (req, res) => {
  res.render("register");
});

// register submit handler
app.post("/register", (req, res) => {
  users[req.body.username] = bcrypt.hashSync(req.body.password);
  console.log(JSON.stringify(users));
  // res.cookie("user",req.body.username);
  req.session.user = req.body.username
  res.redirect('/profile');
});

// login
app.get("/login", (req, res) => {
  res.render("login");
});

// login submit handler
app.post("/login", (req, res) => {
  let testName = req.body.username;
  let testPassword = req.body.password;
  if (users[testName] && bcrypt.compareSync(testPassword, users[testName])){
    // res.cookie("user",testName);
    req.session.user = testName;
    res.redirect("/profile");
  } else {
    res.redirect("/login");
  }
});

// profile page
app.get("/profile", (req, res) => {
  console.log("profile says:" + JSON.stringify(req.session.user));
  username = req.session.user;
  password = users[username];
  if(users[username]){
    const templateVars = {user: username, password: password};
    res.render("profile", templateVars);  
  } else {
    res.redirect('/');
  }
});

// logout page
app.get("/logout", (req, res) => {
  res.render("logout");
});

app.delete("/login", (req,res) => {
  res.send("You hit the delete route")
});

// logout submit handler
app.post("/logout", (req, res) => {
  // res.clearCookie("user");
  req.session = null;
  res.redirect("/");
});

// 404
app.get('*',(req,res)=>{
  res.status(404);
  res.render('404');
});

//
// SET THE APP TO LISTENIN' AND EXIT THE MAIN THREAD
//
app.listen(PORT, "localhost", () => {
  console.log(`Server is listening on ${PORT}`);
});
