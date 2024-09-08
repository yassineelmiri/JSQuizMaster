const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get("/add_profile", (req, res) => {
  res.render("profile/add_profile");
});

router.post("/add_profile", profileController.addProfile);

module.exports = router;
