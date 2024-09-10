const student = require('../models/studentModel');





module.exports = {
    
    getStudents: async (req, res) => {

        student.getStudents()
            .then((students) => {
                res.render('Etudiant/index', { students});
            })
            .catch((error) => {
                console.error("Error fetching professors:", error);
                res.status(500).json({ message: "An error occurred while fetching professors." });
            });
   }




}