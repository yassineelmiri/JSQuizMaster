const db = require('../db');



module.exports = {
    
    getStudents: async(classe) => {
        const result = await db
            .promise()
            .query('SELECT * FROM Student where class_id=?', [classe.id])

            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching professors:", err);
            });
        return result;
  }



};