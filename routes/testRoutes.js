const express = require('express');
const router = express.Router();
const testController = require('../controllers/TestController');
const checkRole = require('../middlewares/CheckRole');

router.get('/tests',checkRole('Formateur'), testController.getAllTests);
router.get('/test/:id',checkRole('Formateur'), testController.getOneTest);
router.get('/addTest',checkRole('Formateur'), testController.testForm);
router.post('/test',checkRole('Formateur'), testController.addTest);
router.put('/test/:id',checkRole('Formateur'), testController.updateTest);
router.delete('/test/:id',checkRole('Formateur'), testController.deleteTest);


router.get('/get-student-tests',checkRole('Student'), testController.getStudentTests);
module.exports = router;