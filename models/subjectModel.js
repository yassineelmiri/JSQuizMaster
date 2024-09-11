const db = require('../db');

module.exports = {
    getAllSubjects: () => {
        const result = db
            .promise()
            .query('SELECT * FROM Subject')
            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching subject:", err);
            });
        return result;
    },
    getOneSubject: (id) => {
        const result = db
            .promise()
            .query(`SELECT * FROM Subject where id = ${id}`)
            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching subjects:", err);
            });
        return result;
    },
    addSubject: (data) => {
        return db
            .promise()
            .query(
                `INSERT INTO Subject (Name, Subject)
                    VALUES (?, ?);`,
                [data.Name, data.Subject]
            )
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error inserting subject:', err);
            });
    },
    updateSubject: (id, data) => {
        return db
            .promise()
            .query(
                `UPDATE Subject  
                SET Name = ?, Subject = ?
                WHERE id = ${id};`,
                [data.Name, data.Subject]
            )
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error updating subject:', err);
            });
    },
    deleteSubject: (id) => {
        return db
            .promise()
            .query(`DELETE FROM Subject WHERE id = ${id}`)
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error deleting subject:', err);
            });
    }
};