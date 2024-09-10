const db = require('../db');

module.exports = {
    getAllMedias: () => {
        const result = db
            .promise()
            .query('SELECT * FROM Media')
            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching Media:", err);
            });
        return result;
    },
    getOneMedia: (id) => {
        const result = db
            .promise()
            .query(`SELECT * FROM Media where id = ${id}`)
            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching Medias:", err);
            });
        return result;
    },
    addMedia: (data) => {
        return db
            .promise()
            .query(
                `INSERT INTO Media (media)
                    VALUES (?);`,
                [data.media]
            )
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error inserting Media:', err);
            });
    },
    updateMedia: (id, data) => {
        return db
            .promise()
            .query(
                `UPDATE Media  
                SET media = ?
                WHERE id = ${id};`,
                [data.media]
            )
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error updating Media:', err);
            });
    },
    deleteMedia: (id) => {
        return db
            .promise()
            .query(`DELETE FROM Media WHERE id = ${id}`)
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error deleting Media:', err);
            });
    }
};