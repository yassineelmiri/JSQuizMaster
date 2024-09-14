const test = require('../models/testModel');

module.exports = {
    getAllTests: async (req, res) => {
        try {
            const result = await test.getAllTests();
            res.render("Formateur/test", { tests: result });
        } catch (error) {
            console.error("Error fetching tests:", error);
            res.status(500).json({ message: "An error occurred while fetching tests." });
        }
    },

    getOneTest: async (req, res) => {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Test ID is required" });
        }
        try {
            const result = await test.getOneTest(id);
            res.status(200).send(result);
        } catch (error) {
            console.error("Error fetching test:", error);
            res.status(500).json({ message: `An error occurred while fetching test with ID: ${id}` });
        }
    },

    addTest: async (req, res) => {
        const { Name, testDate, Description, professor_id } = req.body;
        if (!Name || !testDate || !Description || !professor_id) {
            return res.status(400).json({ message: "Please complete all inputs" });
        }

        try {
            const result = await test.addTest(req.body);
            res.render("Formateur/question", { id: result.insertId });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },

    updateTest: async (req, res) => {
        const id = req.params.id;
        const { Name, testDate, Description, professor_id } = req.body;

        if (!id) {
            return res.status(400).json({ message: "Test ID is required" });
        }

        if (!Name || !testDate || !Description || !professor_id) {
            return res.status(400).json({ message: "Please complete all inputs" });
        }

        try {
            const result = await test.updateTest(id, req.body);
            res.status(200).json({ message: "Test updated successfully" });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },

    deleteTest: async (req, res) => {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Test ID is required" });
        }

        try {
            const result = await test.deleteTest(id);
            res.status(200).json({ message: "Test deleted successfully" });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },

    testForm: (req, res) => {
        if (req.session.user) {
            res.render("Formateur/addTest", { user: req.session.user });
        } else {
            res.redirect('/login');
        }
    }
};
