const express = require('express');
const router = express.Router();
const testController = require('../controllers/TestController');

router.get('/tests', testController.getAllTests);
router.get('/test/:id', testController.getOneTest);
router.get('/addTest', testController.testForm);
router.post('/test', testController.addTest);
router.put('/test/:id', testController.updateTest);
router.delete('/test/:id', testController.deleteTest);

module.exports = router;