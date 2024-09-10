const db = require('../db');

module.exports = {
    getAllLevels: () => {
        const result = db
            .promise()
            .query('SELECT * FROM Level')
            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching Level:", err);
            });
        return result;
    },
    getOneLevel: (id) => {
        const result = db
            .promise()
            .query(`SELECT * FROM Level where id = ${id}`)
            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching Levels:", err);
            });
        return result;
    },
    addLevel: (data) => {
        return db
            .promise()
            .query(
                `INSERT INTO Level (Name, maxPoints, minPoints)
                    VALUES (?, ?, ?);`,
                [data.name, data.maxPoints, data.minPoints]
            )
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error inserting Level:', err);
            });
    },
    updateLevel: (id, data) => {
        return db
            .promise()
            .query(
                `UPDATE Level  
                SET name = ?, maxPoints = ?, minPoints = ?
                WHERE id = ${id};`,
                [data.name, data.maxPoints, data.minPoints]
            )
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error updating Level:', err);
            });
    },
    deleteLevel: (id) => {
        return db
            .promise()
            .query(`DELETE FROM Level WHERE id = ${id}`)
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error deleting Level:', err);
            });
    }
};