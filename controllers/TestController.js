const test = require('../models/testModel');

module.exports = {
    getAllTests: (req, res) => {
        test.getAllTests()
            .then((result) => {
                res.render("Formateur/test", { tests: result });
            })
            .catch((error) => {
                console.error("Error fetching tests:", error);
                res.status(500).json({ message: "An error occurred while fetching tests." });
            });
    },
    getOneTest: (req, res) => {
        const id = req.params.id;
        if (!id) {
            console.log("there is no test selected");
        }
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
        if (!data.Name, !data.testDate, !data.Description, !data.professor_id) {
            console.log("please complete the inputs");
        }
        try {
            const result = await test.addTest(data);
            res.render("Formateur/question", { id: result });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },
    updateTest: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        if (!id) {
            console.log("there is no subject selected");
        }
        if (!data.Name, !data.testDate, !data.Description, !data.professor_id) {
            console.log("please complete the inputs");
        }
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
        if (!id) {
            console.log("there is no subject selected");
        }
        try {
            const result = await test.deleteTest(id);
            res.status(200).send(result);
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
    },
    getStudentTests: async (req, res) => {
        const id = req.session.user.id;
      const studenttests = await test.getStudentTest(id);
        res.render('StudentTests/index',{studenttests});
    }
}
