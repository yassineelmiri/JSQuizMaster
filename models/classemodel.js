const db = require('../db');


module.exports = {

    getclasses: async (prof_id) => {
        const result = await db
            .promise()
            .query('SELECT * FROM Class WHERE professor_id=?', [prof_id])

            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching professors:", err);
            });
        return result;
    },
    createclasse: async (data) => {
        const { name, prof_id } = data;

        return await db
            .promise()
            .query(
                `INSERT INTO Class (name,professor_id)
                    VALUES (?, ?);`,
                [name, prof_id]
            )

            .then(([result]) => result)
            .catch((err) => {
                console.error('Error inserting formateur:', err);
            });
    }

}