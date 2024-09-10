const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/MediaController');

router.get('/medias', mediaController.getAllMedias);
router.get('/media/:id', mediaController.getOneMedia);
router.post('/media', mediaController.addMedia);
router.put('/media/:id', mediaController.updateMedia);
router.delete('/media/:id', mediaController.deleteMedia);

module.exports = router;