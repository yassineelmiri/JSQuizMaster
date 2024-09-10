const db = require('../db');



module.exports = {
    
    getStudents: async() => {
         const result = await db
            .promise()
            .query('SELECT * FROM Student ')

            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching professors:", err);
            });
        return result;
  }



};