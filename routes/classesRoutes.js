const express = require('express');
const router = express.Router();
const classecontroller = require('../controllers/classecontroller.js')

const checkRole = require('../middlewares/CheckRole');




router.get('/classe', checkRole('Formateur'), classecontroller.getclasses);
router.get('/classe-deatails', checkRole('Formateur'), classecontroller.getclasseDeatails);
router.post('/classe-create', checkRole('Formateur'), classecontroller.createclasse);
router.post('/update-classe', checkRole('Formateur'), classecontroller.updateclasse);
router.post('/delete-classe', checkRole('Formateur'), classecontroller.deleteclasse);



module.exports = router;