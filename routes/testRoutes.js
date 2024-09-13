const express = require('express');
const router = express.Router();
const testController = require('../controllers/TestController');
const checkRole = require('../middlewares/CheckRole');

router.get('/tests', testController.getAllTests);
router.get('/test/:id', testController.getOneTest);
router.get('/addTest', testController.testForm);
router.post('/test', testController.addTest);
router.put('/test/:id', testController.updateTest);
router.delete('/test/:id', testController.deleteTest);


router.get('/get-student-tests',checkRole('Student'), testController.getStudentTests);
module.exports = router;