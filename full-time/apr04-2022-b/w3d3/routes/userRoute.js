const express = require('express');
const router = express.Router();

// GET /login
router.get("/login", (req, res) => {
    res.render("login");
  });
  
  // POST /login
  router.post("/login", (req, res) => {
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

  module.exports = router;
  