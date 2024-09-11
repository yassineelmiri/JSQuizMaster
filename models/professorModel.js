const db = require('../db');
module.exports = {
    getAllProfessors: () => {
        const result = db
            .promise()
            .query('SELECT * FROM Professor')
            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching professors:", err);
            });
        return result;
    },
     addProfessor: (formateurData) => {
        const { firstName, lastName, email, password, birthDate, adresse, Speciality } = formateurData;
        return db
            .promise()
            .query(
                `INSERT INTO Professor (firstName, lastName, email, password, adresse, birthDate, created_at, Speciality)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
                [firstName, lastName, email, password, birthDate, adresse,new Date(), Speciality ]
            )
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error inserting formateur:', err);
            });
    },
      checkcridencials:async(formateurData)=> {
    const { email, password } = formateurData;
    try {
        const [result] = await db.promise().query(
            'SELECT * FROM Professor WHERE email = ? AND password = ?',
            [email, password]
        );

        return result.length > 0 ? result[0] : null;

    } catch (error) {
        console.error('Error checking credentials:', error);
        throw error;
    }
}






};