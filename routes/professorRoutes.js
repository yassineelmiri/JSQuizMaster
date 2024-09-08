const express = require('express');
const router = express.Router();
const professorController = require('../controllers/ProfessorController');

router.get('/professors', professorController.getAllProfessors);

module.exports = router;