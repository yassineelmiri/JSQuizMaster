const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/SubjectController');
const checkRole = require('../middlewares/CheckRole');

router.get('/subjects',checkRole('Formateur'), subjectController.getAllSubjects);
router.get('/subject/:id',checkRole('Formateur'), subjectController.getOneSubject);
router.post('/subject',checkRole('Formateur'), subjectController.addSubject);
router.put('/subject/:id',checkRole('Formateur'), subjectController.updateSubject);
router.delete('/subject/:id',checkRole('Formateur'), subjectController.deleteSubject);

module.exports = router;