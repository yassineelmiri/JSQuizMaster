const professorModel = require('../models/professorModel.js');
const Student = require('../models/studentModel');


module.exports = {
   register: async (req, res) => {
    try {
        const { firstName, lastName, email, password, birthDate, adress, Speciality } = req.body;
        
        if (!firstName || !lastName || !email || !password || !birthDate || !adress || !Speciality) {
            throw new Error("All fields are required");
        }
        
        await professorModel.addProfessor({firstName, lastName, email, password, birthDate, adress, Speciality });
        res.redirect('/login?type=Formateur');
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send("An error occurred during registration: " + error.message);
    }
},

    login: async (req, res) => {
            const { email, password, role } = req.body;
try {
        if (role === 'Formateur') {
            const formateur = await professorModel.checkcridencials({ email, password });

            if (formateur) {
                 const hasClasse = (await professorModel.getclasse(formateur.id))?true:false;
                req.session.user = {
                    id: formateur.id,
                    name: formateur.firstName,
                    email: formateur.email,
                    role: 'Formateur',
                    hasClasse: hasClasse,
                };
                console.log(req.session.user);
                
                
                return res.redirect('/Dashboard');  
            } else {
                return res.status(401).send('Invalid credentials for Formateur');
            }
        } 
        else if (role === 'Student') {
            const student = await Student.checkcridencials({ email, password });

            if (student) {
                
                req.session.user = {
                    id: student.id,
                    name: student.name,
                    role: 'Student'  
                };
                return res.redirect('/Dashboard');  
            } else {
                return res.status(401).send('Invalid credentials for Student');
            }
        } 
        else {
            return res.status(403).send('Unauthorized role');
        }
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).send('Internal Server Error');
    }
    },
    logout: (req, res) => {
        
         req.session.destroy((err) => {
            if (err) {
                return res.status(500).send('Error logging out');
            }
        res.redirect('/'); 
    });
    }
        
};