const professor = require("../models/professorModel");


module.exports = {
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
    }

};
