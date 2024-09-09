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
    }
};