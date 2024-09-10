const Classe =require('../models/classemodel.js')

module.exports = {
    getclasses: (req, res) => {
                const prof_id = req.session.user.id;
        Classe.getclasses(prof_id)
            .then((classes) => {
                res.render('Formateur/class',{classes,prof_id});
            })
            .catch((error) => {
                console.error("Error fetching professors:", error);
                res.status(500).json({ message: "An error occurred while fetching professors." });
            });
    },
    createclasse: (req, res) => {
        const { name, prof_id } = req.body;
        try {
            Classe.createclasse({ name, prof_id });
            res.redirect('/classe');
        }catch (error) {
        res.status(500).send(error.message);
    }
    }
};