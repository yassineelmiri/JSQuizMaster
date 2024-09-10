const db = require('../db');

module.exports = {
    getAllQuestions: () => {
        const result = db
            .promise()
            .query('SELECT * FROM Question')
            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching Question:", err);
            });
        return result;
    },
    getOneQuestion: (id) => {
        const result = db
            .promise()
            .query(`SELECT * FROM Question where id = ${id}`)
            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching Questions:", err);
            });
        return result;
    },
    addQuestion: (data) => {
        return db
            .promise()
            .query(
                `INSERT INTO Question (Question)
                    VALUES (?, ?, ?, ?, ?);`,
                [data.Text, data.test_id, data.level_id, data.media_id, data.subject_id]
            )
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error inserting Question:', err);
            });
    },
    updateQuestion: (id, data) => {
        return db
            .promise()
            .query(
                `UPDATE Question  
                SET Text = ?, test_id = ?, level_id = ?, media_id = ?, subject_id = ?
                WHERE id = ${id};`,
                [data.Text, data.test_id, data.level_id, data.media_id, data.subject_id]
            )
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error updating Question:', err);
            });
    },
    deleteQuestion: (id) => {
        return db
            .promise()
            .query(`DELETE FROM Question WHERE id = ${id}`)
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error deleting Question:', err);
            });
    }
};