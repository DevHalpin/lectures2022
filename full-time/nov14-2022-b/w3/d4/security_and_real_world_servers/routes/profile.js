const express = require('express');
const router = express.Router();

module.exports = function(users) {
// Profile Page
router.get('/',(req,res)=>{
    console.log("req.cookies:",req.session.user);
    if (users[req.session.user]){
      const templateVars = { 
        user: req.session.user,
        password: users[req.session.user] 
      };
      res.render('profile', templateVars);
    } else {
      res.redirect('/login');
    }
  });

  return router
}