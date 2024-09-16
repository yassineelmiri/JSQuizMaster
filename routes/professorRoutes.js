const express = require('express');
const router = express.Router();
const professorController = require('../controllers/ProfessorController');
const checkRole = require('../middlewares/CheckRole');

router.get('/professors', professorController.getAllProfessors);
router.get('/professor/:id', professorController.getOneProfessor);
router.post('/professor', professorController.addProfessor);
router.put('/professor/:id', professorController.updateProfessor);
router.delete('/professor/:id', professorController.deleteProfessor);

router.get('/assign-quiz',checkRole('Formateur'), professorController.renderAssignTestPage);
router.post('/professors/assign-test',checkRole('Formateur'), professorController.assignTestToStudents);

module.exports = router;