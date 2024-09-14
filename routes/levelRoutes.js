const express = require('express');
const router = express.Router();
const levelController = require('../controllers/LevelController');
const checkRole = require('../middlewares/CheckRole');

router.get('/levels',checkRole('Formateur'), levelController.getAllLevels);
router.get('/level/:id',checkRole('Formateur'), levelController.getOneLevel);
router.post('/level',checkRole('Formateur'), levelController.addLevel);
router.put('/level/:id',checkRole('Formateur'), levelController.updateLevel);
router.delete('/level/:id',checkRole('Formateur'), levelController.deleteLevel);

module.exports = router;