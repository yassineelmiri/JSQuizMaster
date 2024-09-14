const db = require('../db');


const testModel = {
    getAllTests: () => {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM Test";
            db.query(query, (err, results) => {
                if (err) {
                    console.error("Error fetching tests from DB:", err);
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
,

    getOneTest: (id) => {
        const query = 'SELECT * FROM Test WHERE id = ?';
        return db.query(query, [id]);
    },

    addTest: (data) => {
        const query = 'INSERT INTO Test (Name, testDate, Description, professor_id) VALUES (?, ?, ?, ?)';
        return db.query(query, [data.Name, data.testDate, data.Description, data.professor_id]);
    },

    updateTest: (id, data) => {
        const query = 'UPDATE Test SET Name = ?, testDate = ?, Description = ?, professor_id = ? WHERE id = ?';
        return db.query(query, [data.Name, data.testDate, data.Description, data.professor_id, id]);
    },

    deleteTest: (id) => {
        const query = 'DELETE FROM Test WHERE id = ?';
        return db.query(query, [id]);
    }
};


module.exports = testModel;
