const student = require('../models/studentModel');
const professorModel = require('../models/professorModel.js');
const mailer = require('../models/mailer.js');


module.exports = {
    
    getStudents: async (req, res) => {
        const classe = await professorModel.getclasse(req.session.user.id);
        
        student.getStudents(classe)
            .then((students) => {
                res.render('Etudiant/index', { students});
            })
            .catch((error) => {
                console.error("Error fetching professors:", error);
                res.status(500).json({ message: "An error occurred while fetching professors." });
            });
    },
    addstudent: async (req, res) => {
        const classe = await professorModel.getclasse(req.session.user.id);
        
                        res.render('Etudiant/create', {classe});

    },
    inserStudent: async (req, res) => {
        try {
              const { firstName, lastName, email, password, birthDate, adress, classe_id } = req.body;

        
          //KNT DAYR VARIABLE CONST const ana =   !!!!
    
                await student.addstudent({ firstName, lastName, email, password, adress, birthDate, classe_id });
               mailer.sendCredentials(email,firstName,password)
            
            res.redirect('/students');
        } catch (error) {
            res.status(500).send(error.message);
        }
               

    },
    editstudent: async (req, res) => {
        const student_id = req.query.student;
        try {
                    const Student = await student.findById(student_id);
             res.render('Etudiant/edit', {Student});

        } catch (error) {
                        res.status(500).send(error.message);

        }
    },
    updateStudent: async (req, res) => {
         try {
         const { firstName, lastName, adress } = req.body;
        await student.uodatestudent({ firstName, lastName,  adress });
                    res.redirect('/students');
  } catch (error) {
            res.status(500).send(error.message);
        }

    },
    deleteStudent: async (req, res) => {
         try {
         const student_id = req.body.student_id;
        await student.delete(student_id);
                    res.redirect('/students');
  } catch (error) {
            res.status(500).send(error.message);
        }

    },

    getAllStudents: async () => {
        try {
            const [rows] = await db.promise().query('SELECT * FROM Student');
            return rows;
        } catch (error) {
            console.error('Error fetching students:', error);
            throw error;
        }
    }




}