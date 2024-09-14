const express = require('express');
const router = express.Router();
const logincontroller = require('../controllers/loginccontroller.js')
const isLoggedIn = require('../middlewares/isLoggedIn'); 
const isGest = require('../middlewares/isGest');



router.get('/Login',isGest, (req, res) => {
    const role = req.query.type;
    if (role) {
            res.render("Auth/login", { role });

    } else {
        res.redirect('/');
    }
});

router.post('/logined', logincontroller.login);

router.get('/register',isGest, (req, res) => {
    
        res.render('Auth/register');
});
router.post('/registred', logincontroller.register);
router.post('/logout',isLoggedIn, logincontroller.logout);

module.exports = router;


