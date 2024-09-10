const subject = require("../models/subjectModel");


module.exports = {
    getAllSubjects: (req, res) => {
        subject.getAllSubjects()
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((error) => {
                console.error("Error fetching subjects:", error);
                res.status(500).json({ message: "An error occurred while fetching subjects." });
            });
    },
    getOneSubject: (req, res) => {
        const id = req.params.id;
        subject.getOneSubjects(id)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((error) => {
                console.error("Error fetching subject:", error);
                res.status(500).json({ message: `An error occurred while fetching subject with this id : ${id}` });
            });
    },
    addSubject: async (req, res) => {
        const data = req.body;
        try {
            const result = await subject.addSubject(data);
            res.status(201).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },
    updateSubject: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        try {
            const result = await subject.updateSubject(id, data);
            res.status(200).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },
    deleteSubject: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await subject.deleteSubject(id);
            res.status(200).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    }

};
