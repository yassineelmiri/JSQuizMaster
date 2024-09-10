const express = require('express');
const router = express.Router();
const levelController = require('../controllers/LevelController');

router.get('/levels', levelController.getAllLevels);
router.get('/level/:id', levelController.getOneLevel);
router.post('/level', levelController.addLevel);
router.put('/level/:id', levelController.updateLevel);
router.delete('/level/:id', levelController.deleteLevel);

module.exports = router;