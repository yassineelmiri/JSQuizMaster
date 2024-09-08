const express = require('express');
const router = express.Router();
const TestController = require('../controllers/TestController'); // Assurez-vous que le chemin est correct

router.get("/Formateur", (req, res) => {
  res.render("Formateur/index");
});

router.get("/Formateur/test", (req, res) => {
  res.render("Formateur/test");
});

router.get("/Formateur/Qestion", (req, res) => {
  res.render("Formateur/qestion");
});

router.get("/Formateur/Resulte", (req, res) => {
  res.render("Formateur/resulte");
});

router.post('/submit-test', TestController.createTest);

module.exports = router;
