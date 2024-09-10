const express = require('express');
const router = express.Router();
const classecontroller = require('../controllers/classecontroller.js')
const isLoggedIn = require('../middlewares/isLoggedIn'); 
const isGest = require('../middlewares/isGest');
const checkRole = require('../middlewares/CheckRole');




router.get('/classe', checkRole('Formateur'), classecontroller.getclasses);
router.post('/classe-create', checkRole('Formateur'), classecontroller.createclasse);



module.exports = router;