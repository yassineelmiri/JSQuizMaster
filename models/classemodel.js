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
             
            .catch((err) => {
                console.error('Error inserting formateur:', err);
            });
    },
    update: async (data) => {
        const { name, classe_id } = data;
         return await db
            .promise()
            .query(
                `UPDATE Class set name=? WHERE id=?`,
                   
                [name, classe_id]
         ) .catch((err) => {
                console.error('Error inserting formateur:', err);
            });
    },
    delete: async (id) => {
         return await db
            .promise()
            .query(
                `DELETE FROM Class  WHERE id=?`,
                   
                [id]
         ) .catch((err) => {
                console.error('Error inserting formateur:', err);
            });
    },
    classeDeatails: async (id)=>{
        return await db
            .promise()
            .query(
                `SELECT * FROM Class  WHERE id=?`,
                   
                [id]
        )
           .then((result) => result[0])
            .catch((err) => {
                console.error('Error inserting formateur:', err);
            });
    }

}