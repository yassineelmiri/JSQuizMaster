const professor = require("../models/professorModel");
const student = require("../models/studentModel");

module.exports = {
    getDashboardStats: async (req, res) => {
        try {
            const classCount = await professor.getClassCount();
            const studentCount = await professor.getStudentCount();
            const demandCount = await professor.getDemandCount();
            const subjectCount = await professor.getSubjectCount();

            res.render('Dashboard', {
                classCount,
                studentCount,
                demandCount,
                subjectCount
            });
        } catch (error) {
            console.error('Error fetching dashboard stats:', error);
            res.status(500).json({ message: 'An error occurred while fetching dashboard statistics.' });
        }
    },
    getAllProfessors: (req, res) => {
        professor.getAllProfessors()
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((error) => {
                console.error("Error fetching professors:", error);
                res.status(500).json({ message: "An error occurred while fetching professors." });
            });
    },
    getProfessorsResulte : (req, res) => {
        professor.getProfessorsResulte()
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((error) => {
                console.error("Error fetching professors:", error);
                res.status(500).json({ message: "An error occurred while fetching professors." });
            });
    },
    getOneProfessor: (req, res) => {
        const id = req.params.id;
        professor.getOneProfessor(id)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((error) => {
                console.error("Error fetching professor:", error);
                res.status(500).json({ message: `An error occurred while fetching professor with this id : ${id}` });
            });
    },
    addProfessor: async (req, res) => {
        const data = req.body;
        try {
            const result = await professor.addProfessor(data);
            res.status(201).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },
    updateProfessor: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        try {
            const result = await professor.updateProfessor(id, data);
            res.status(200).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },
    deleteProfessor: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await professor.deleteProfessor(id);
            res.status(200).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },
    assignTestToStudents: async (req, res) => {
        const { studentIds, quizId } = req.body;

        try {
            await professor.assignTestToStudents(studentIds, quizId);
            res.status(200).send("Quiz requests sent successfully.");
        } catch (error) {
            console.error("Error assigning quiz:", error);
            res.status(500).json({ message: "An error occurred while assigning the quiz." });
        }
    },

    renderAssignTestPage: async (req, res) => {
        try {
            const students = await student.getAllStudents(); // Assurez-vous que vous avez une méthode pour récupérer tous les étudiants
            res.render('Formateur/Assign', { students });
        } catch (error) {
            console.error("Error fetching students:", error);
            res.status(500).json({ message: "An error occurred while fetching students." });
        }
    }

};
