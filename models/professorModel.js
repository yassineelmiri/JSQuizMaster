const db = require('../db');
const bcrypt = require('bcryptjs');  
const saltRounds = 10;

module.exports = {

    addProfessor: async (formateurData) => {
        const { firstName, lastName, email, password, birthDate, adress, Speciality } = formateurData;
        console.log(formateurData);
        
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        return db
            .promise()
            .query(
                `INSERT INTO Professor (firstName, lastName, email, password, adresse, birthDate, created_at, Speciality)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
                [firstName, lastName, email, hashedPassword, adress, birthDate, new Date(), Speciality]
            )
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error inserting formateur:', err);
            });
    },

    checkcridencials: async (formateurData) => {
        const { email, password } = formateurData;
        try {
            const [rows] = await db.promise().query('SELECT * FROM Professor WHERE email = ?', [email]);

            if (rows.length > 0) {
                const professor = rows[0];
                const match = await bcrypt.compare(password, professor.password);
                if (match) {
                    return professor;
                }
            }
            return null;
        } catch (error) {
            console.error('Error checking credentials:', error);
            throw error;
        }
    },

    getclasse: async (id) => {
        const [rows] = await db.promise().query('SELECT * FROM Class WHERE professor_id = ?', [id]);
        if (rows.length > 0)
            return rows[0];
    }

};
