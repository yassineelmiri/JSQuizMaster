const Question = require("../models/questionModel");


module.exports = {
    getAllQuestions: (req, res) => {
        Question.getAllQuestions()
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((error) => {
                console.error("Error fetching Questions:", error);
                res.status(500).json({ message: "An error occurred while fetching Questions." });
            });
    },
    getOneQuestion: (req, res) => {
        const id = req.params.id;
        Question.getOneQuestions(id)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((error) => {
                console.error("Error fetching Question:", error);
                res.status(500).json({ message: `An error occurred while fetching Question with this id : ${id}` });
            });
    },
    addQuestion: async (req, res) => {
        const data = req.body;
        try {
            const result = await Question.addQuestion(data);
            res.status(201).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },
    updateQuestion: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        try {
            const result = await Question.updateQuestion(id, data);
            res.status(200).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },
    deleteQuestion: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await Question.deleteQuestion(id);
            res.status(200).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    }

};
