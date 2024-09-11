const Media = require("../models/mediaModel");


module.exports = {
    getAllMedias: (req, res) => {
        Media.getAllMedias()
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((error) => {
                console.error("Error fetching Medias:", error);
                res.status(500).json({ message: "An error occurred while fetching Medias." });
            });
    },
    getOneMedia: (req, res) => {
        const id = req.params.id;
        if (!id) {
            console.log("there is no media selected");
        }
        else {
            Media.getOneMedias(id)
                .then((result) => {
                    res.status(200).send(result);
                })
                .catch((error) => {
                    console.error("Error fetching Media:", error);
                    res.status(500).json({ message: `An error occurred while fetching Media with this id : ${id}` });
                });
        }
    },
    addMedia: async (req, res) => {
        const data = req.body;
        if (!data.media) {
            console.log("please complete the input");
        }
        else {
            try {
                const result = await Media.addMedia(data);
                res.status(201).send(result);
            } catch (error) {
                console.error("Error:", error);
                res.status(500).json({ message: `An error occurred: ${error.message}` });
            }
        }
    },
    updateMedia: async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        if (!data.media) {
            console.log("please complete the input");
        }
        if (!id) {
            console.log("there is no media selected");
        }
        else {
            try {
                const result = await Media.updateMedia(id, data);
                res.status(200).send(result);
            } catch (error) {
                console.error("Error:", error);
                res.status(500).json({ message: `An error occurred: ${error.message}` });
            }
        }
    },
    deleteMedia: async (req, res) => {
        const id = req.params.id;
        if (!id) {
            console.log("there is no media selected");
        } else {
            try {
                const result = await Media.deleteMedia(id);
                res.status(200).send(result);
            } catch (error) {
                console.error("Error:", error);
                res.status(500).json({ message: `An error occurred: ${error.message}` });
            }
        }
    }
};
