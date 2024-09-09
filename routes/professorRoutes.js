const express = require('express');
const router = express.Router();
const professorController = require('../controllers/ProfessorController');

router.get('/professors', professorController.getAllProfessors);
router.get('/professor/:id', professorController.getOneProfessor);
router.post('/professor', professorController.addProfessor);
router.put('/professor/:id', professorController.updateProfessor);

module.exports = router;