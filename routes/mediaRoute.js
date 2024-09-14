const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/MediaController');
const checkRole = require('../middlewares/CheckRole');

router.get('/medias',checkRole('Formateur'), mediaController.getAllMedias);
router.get('/media/:id',checkRole('Formateur'), mediaController.getOneMedia);
router.post('/media',checkRole('Formateur'), mediaController.addMedia);
router.put('/media/:id',checkRole('Formateur'), mediaController.updateMedia);
router.delete('/media/:id',checkRole('Formateur'), mediaController.deleteMedia);

module.exports = router;