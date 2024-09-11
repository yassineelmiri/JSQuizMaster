const express = require('express');
const router = express.Router();

const studentcontroller = require('../controllers/studentcontroller');
const checkRole = require('../middlewares/CheckRole');


router.get('/students', checkRole('Formateur'), studentcontroller.getStudents);


module.exports = router;