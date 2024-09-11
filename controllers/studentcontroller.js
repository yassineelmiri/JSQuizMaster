const student = require('../models/studentModel');
const professorModel = require('../models/professorModel.js');





module.exports = {
    
    getStudents: async (req, res) => {
        const classe = await professorModel.getclasse(req.session.user.id);
        console.log(classe);
        
        student.getStudents(classe)
            .then((students) => {
                res.render('Etudiant/index', { students});
            })
            .catch((error) => {
                console.error("Error fetching professors:", error);
                res.status(500).json({ message: "An error occurred while fetching professors." });
            });
   }




}