const express = require('express');
const router = express.Router();
const questionController = require('../controllers/QuestionController');
const checkRole = require('../middlewares/CheckRole');

router.get('/question',checkRole('Formateur'), questionController.getAllQuestions);
router.get('/question/:id',checkRole('Formateur'), questionController.getOneQuestion);
router.post('/question',checkRole('Formateur'), questionController.addQuestion);
router.put('/question/:id',checkRole('Formateur'), questionController.updateQuestion);
router.delete('/question/:id',checkRole('Formateur'), questionController.deleteQuestion);

module.exports = router;