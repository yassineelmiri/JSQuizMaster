const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/SubjectController');

router.get('/subjects', subjectController.getAllSubjects);
router.get('/subject/:id', subjectController.getOneSubject);
router.post('/subject', subjectController.addSubject);
router.put('/subject/:id', subjectController.updateSubject);
router.delete('/subject/:id', subjectController.deleteSubject);

module.exports = router;