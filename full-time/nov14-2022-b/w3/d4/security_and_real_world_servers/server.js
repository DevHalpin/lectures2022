const express = require("express");
const PORT = 8082;
const methodOverride = require('method-override')
const bcrypt = require("bcryptjs");
const cookieSession = require('cookie-session');

const app = express();

app.set("view engine","ejs");


//
// Users Data
//

const users = {'nally': "qwerty"};

// Mounting resource routes
const profileRouter = require('./routes/profile')(users)

//
// Middleware
//
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false}));
app.use(cookieSession({
  name: 'session',
  keys: ['totallyNotASecretKey', 'mostDefinitelyNotASecretKey']
}))

app.use('/profile', profileRouter)

//
// Routes
//

app.get('/',(req,res)=>{
  res.render('homepage');
});

// Login Routes

app.get('/login',(req,res)=>{
  res.render("login");
});

// login submit handler
app.post("/login",(req,res)=>{
  console.log("login req.body:",req.body);
  const testName = req.body.username;
  const testPassword = req.body.password;
  // if (users[testName] && users[testName] === testPassword){ // the user is authentic
  if (users[testName] && bcrypt.compareSync(testPassword, users[testName])) {
    // res.cookie("user",testName);
    req.session.user = testName;
    res.redirect("/profile");
    // res.end();
  } else {
    res.redirect("/login");
  }
});

// Registration Routes

app.get('/register',(req,res)=>{
  res.render("register");
});

// registeration submit handler
app.patch("/register",(req,res)=>{
  console.log("register req.body:",req.body);
  const newName = req.body.username;
  const newPassword = req.body.password;
  const hashPassword = bcrypt.hashSync(newPassword)

  users[newName] = hashPassword;
  // res.cookie("user",newName);
  req.session.user = newName;

  res.redirect("/profile");
});


// Logout Route
app.get("/logout",(req,res)=>{
  // res.clearCookie("user");
  req.session = null;
  res.redirect("/");
});

app.listen(PORT,"localhost", ()=>{
  console.log(`Server is listening on port ${PORT}`);
});