const express = require('express');
const router = express.Router();

const studentcontroller = require('../controllers/studentcontroller');
const checkRole = require('../middlewares/CheckRole');


router.get('/students', checkRole('Formateur'), studentcontroller.getStudents);
router.get('/student-create', checkRole('Formateur'), studentcontroller.addstudent);
router.get('/student-edit', checkRole('Formateur'), studentcontroller.editstudent);
router.post('/register-student', checkRole('Formateur'), studentcontroller.inserStudent);
router.post('/update-student', checkRole('Formateur'), studentcontroller.updateStudent);
router.post('/delete-student', checkRole('Formateur'), studentcontroller.deleteStudent);


module.exports = router;