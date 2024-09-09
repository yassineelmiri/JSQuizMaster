const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get("/profiles", profileController.getProfiles);

router.post("/profiles/add", profileController.addProfile);

module.exports = router;
