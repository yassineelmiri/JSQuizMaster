const test = require('../models/testModel');

module.exports = {
    getAllTests: (req, res) => {
        test.getAllTests()
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((error) => {
                console.error("Error fetching tests:", error);
                res.status(500).json({ message: "An error occurred while fetching tests." });
            });
    },
    getOneTest: (req, res) => {
        const id = req.params.id;
        test.getOneTest(id)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((error) => {
                console.error("Error fetching test:", error);
                res.status(500).json({ message: `An error occurred while fetching test with this id : ${id}` });
            });
    },
    addTest: async (req, res) => {
        const data = req.body;
        try {
            const result = await test.addTest(data);
            res.status(201).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },
    updateTest: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        try {
            const result = await test.updateTest(id, data);
            res.status(200).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },
    deleteTest: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await test.deleteTest(id);
            res.status(200).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    }
}