module.exports = async(req, res, next) => {
    if (req.session.user) {
      
        res.locals.user = req.session.user;
        res.locals.isFormateur = req.session.user.role === 'Formateur';
        res.locals.isStudent = req.session.user.role === 'Student';
        res.locals.hasClasse = await req.session.user.hasClasse;
    } else {
        res.locals.user = null;
        res.locals.isFormateur = false;
        res.locals.isStudent = false;
    }
    next();
};