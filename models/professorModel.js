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
    getOneProfessor: (id) => {
        const result = db
            .promise()
            .query(`SELECT * FROM Professor where id = ${id}`)
            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching professors:", err);
            });
        return result;
    },
    addProfessor: (data) => {
        return db
            .promise()
            .query(
                `INSERT INTO Professor (firstName, lastName, email, birthDate, Speciality)
                    VALUES (?, ?, ?, ?, ?);`,
                [data.firstName, data.lastName, data.email, data.birthDate, data.Speciality]
            )
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error inserting professor:', err);
            });
    },
    updateProfessor: (id, data) => {
        return db
            .promise()
            .query(
                `UPDATE Professor  
                SET firstName = ?, lastName = ?, email = ?, birthDate = ?, Speciality = ?  
                WHERE id = ${id};`,
                [data.firstName, data.lastName, data.email, data.birthDate, data.Speciality]
            )
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error updating professor:', err);
            });
    }
};