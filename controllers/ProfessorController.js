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
    }
};
