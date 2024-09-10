const express = require('express');
const router = express.Router();
const logincontroller = require('../controllers/loginccontroller.js')
const isLoggedIn = require('../middlewares/isLoggedIn'); 
const isGest = require('../middlewares/isGest');



router.get('/Login',isGest, (req, res) => {
    const role = req.query.type;
    res.render("Auth/login", { role });
});

router.post('/logined', logincontroller.login);

router.get('/register',isGest, (req, res) => {
    
        res.render('Auth/register');
});
router.post('/registred', logincontroller.register);

module.exports = router;


