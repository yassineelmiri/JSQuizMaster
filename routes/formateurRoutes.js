const express = require('express');
const router = express.Router();
const Profile = require('../models/profileModel'); // Add this line
const TestController = require('../controllers/TestController');

// router.get('/Formateur', (req, res) => {
//     Profile.getAll((err, results) => {
//       if (err) {
//         console.error("Error fetching profiles:", err);
//         res.status(500).send(`Internal Server Error: ${err.message}`);
//       } else {
//         res.render('Formateur/index', { professors: results });
//       }
//     });
// });

// router.get("/Formateur/test", (req, res) => {
//   res.render("Formateur/test");
// });

// router.get("/Formateur/Qestion", (req, res) => {
//   res.render("Formateur/qestion");
// });

// router.get("/Formateur/Resulte", (req, res) => {
//   res.render("Formateur/resulte");
// });

// router.post('/submit-test', TestController.createTest);

module.exports = router;