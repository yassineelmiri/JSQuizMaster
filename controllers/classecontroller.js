const Classe =require('../models/classemodel.js')

module.exports = {
    getclasses: (req, res) => {
        const prof_id = req.session.user.id;

        Classe.getclasses(prof_id)
            .then((classes) => {
                res.render('Formateur/classs/index', { classes, prof_id });
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
            req.session.user.hasClasse = true;
            res.redirect('/classe');

        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    updateclasse: (req, res) => {
        const { name, classe_id } = req.body;
        try {
            Classe.update({ name, classe_id });
            res.redirect('/classe');
        } catch (error) {
            res.status(500).send(error.message);

        }
    },
    deleteclasse: (req, res) => {
        const classe_id = req.body.classe_id;
        try {
            Classe.delete(classe_id);
            req.session.user.hasClasse = false;

            res.redirect('/classe');
        } catch (error) {
            res.status(500).send(error.message);

        }
    },
    getclasseDeatails: (req, res) => {
        const classe_id = req.body.id;
       console.log(classe_id);
        try {
            const classe = Classe.classeDeatails(classe_id);

                 res.render('Formateur/classs/deatails', { classe});

        } catch (error) {             res.status(500).send(error.message);
           
       }
                
               
      
}
};