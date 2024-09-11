const level = require("../models/levelModel");


module.exports = {
    getAllLevels: (req, res) => {
        level.getAllLevels()
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((error) => {
                console.error("Error fetching levels:", error);
                res.status(500).json({ message: "An error occurred while fetching levels." });
            });
    },
    getOneLevel: (req, res) => {
        const id = req.params.id;
        level.getOneLevels(id)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((error) => {
                console.error("Error fetching level:", error);
                res.status(500).json({ message: `An error occurred while fetching level with this id : ${id}` });
            });
    },
    addLevel: async (req, res) => {
        const data = req.body;
        try {
            const result = await level.addLevel(data);
            res.status(201).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },
    updateLevel: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        try {
            const result = await level.updateLevel(id, data);
            res.status(200).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    },
    deleteLevel: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await level.deleteLevel(id);
            res.status(200).send(result);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: `An error occurred: ${error.message}` });
        }
    }

};
