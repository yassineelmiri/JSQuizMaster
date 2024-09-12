const db = require('../db');
const bcrypt = require('bcrypt');
const saltRounds = 10;



module.exports = {
    
    getStudents: async(classe) => {
        const result = await db
            .promise()
            .query('SELECT * FROM Student where class_id=?', [classe.id])

            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching Students:", err);
            });
        return result;
    },
    addstudent: async (data)=>{
         const { firstName, lastName, email, password, birthDate, adress, classe_id } = data;
                const hashedPassword = await bcrypt.hash(password, saltRounds);
            return db
                        .promise()
                        .query(
                            `INSERT INTO Student (firstName, lastName, email, password, adresse, birthDate, RegistrationDate, class_id)
                                VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
                            [firstName, lastName, email, hashedPassword,adress,birthDate,new Date(), classe_id ]
                        )
                        .then(([result]) => result)
                        .catch((err) => {
                            console.error('Error inserting student:', err);
                        });
    },
    findById: async (id) => {
         const result = await db
            .promise()
            .query('SELECT * FROM Student where id=?', [id])

            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching Students:", err);
            });
        return result[0];
    },
    uodatestudent: async (data)=>{
                 const { firstName, lastName,birthDate, adress } = data;
                       return db
                        .promise()
                        .query(
                            `UPDATE Student set firstName=? ,lastName=?,adresse=?,birthDate=?`,
                            [firstName, lastName,adress,birthDate ]
                        )
                        .then(([result]) => result)
                        .catch((err) => {
                            console.error('Error inserting student:', err);
                        });
    }, delete: async (id) => {
         return await db
            .promise()
            .query(
                `DELETE FROM Student  WHERE id=?`,
                   
                [id]
         ) .catch((err) => {
                console.error('Error inserting formateur:', err);
            });
    },



};