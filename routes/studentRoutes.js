const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentcontroller');
const checkRole = require('../middlewares/CheckRole');

router.get('/students', checkRole('Formateur'), studentController.getStudents);
router.get('/student-create', checkRole('Formateur'), studentController.addStudent);
router.get('/student-edit', checkRole('Formateur'), studentController.editStudent);
router.post('/register-student', checkRole('Formateur'), studentController.insertStudent);
router.post('/update-student', checkRole('Formateur'), studentController.updateStudent);
router.post('/delete-student', checkRole('Formateur'), studentController.deleteStudent);

// Routes for demandes
router.get('/demandes', checkRole('Formateur'), studentController.getDemandes);
router.post('/demandes/:id/accept', checkRole('Formateur'), studentController.acceptDemande);
router.post('/demandes/:id/reject', checkRole('Formateur'), studentController.rejectDemande);

module.exports = router;
