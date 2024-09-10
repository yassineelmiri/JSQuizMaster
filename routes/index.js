const express = require('express');
const router = express.Router();
const isGest = require('../middlewares/isGest'); 
const isLoggedIn = require('../middlewares/isLoggedIn'); 

router.get("/",isGest, (req, res) => {
  res.render("home");
});
router.get("/Dashboard",isLoggedIn, (req, res) => {
  res.render("Dashboard");
});

module.exports = router;
