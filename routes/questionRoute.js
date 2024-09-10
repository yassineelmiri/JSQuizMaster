const express = require('express');
const router = express.Router();
const questionController = require('../controllers/QuestionController');

router.get('/question', questionController.getAllQuestions);
router.get('/question/:id', questionController.getOneQuestion);
router.post('/question', questionController.addQuestion);
router.put('/question/:id', questionController.updateQuestion);
router.delete('/question/:id', questionController.deleteQuestion);

module.exports = router;