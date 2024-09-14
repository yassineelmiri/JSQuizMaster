const db = require('../db');
const bcrypt = require('bcryptjs');
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

    addstudent: async (data) => {
        const { firstName, lastName, email, password, birthDate, adress, classe_id } = data;

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        return db
            .promise()
            .query(
                `INSERT INTO Student (firstName, lastName, email, password, adresse, birthDate, RegistrationDate, class_id)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
                [firstName, lastName, email, hashedPassword, adress, birthDate, new Date(), classe_id]
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

    uodatestudent: async (data) => {
        const { firstName, lastName, birthDate, adress } = data;
        return db
            .promise()
            .query(
                `UPDATE Student set firstName=?, lastName=?, adresse=?, birthDate=?`,
                [firstName, lastName, adress, birthDate]
            )
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error updating student:', err);
            });
    },

    delete: async (id) => {
        return await db
            .promise()
            .query(
                `DELETE FROM Student WHERE id=?`,
                [id]
            )
            .catch((err) => {
                console.error('Error deleting student:', err);
            });
    },

    getAllStudents: async () => {
        try {
            const [rows] = await db.promise().query('SELECT * FROM Student');
            console.log("Students retrieved from database:", rows); // Ajoutez ce log pour vérifier les données
            return rows;
        } catch (error) {
            console.error('Error fetching students:', error);
            throw error;
        }
    },
    
     checkcridencials: async (formateurData) => {
        const { email, password } = formateurData;
        try {
            const [rows] = await db.promise().query('SELECT * FROM Student WHERE email = ?', [email]);

            if (rows.length > 0) {
                const student = rows[0];
                const match = await bcrypt.compare(password, student.password);
                if (match) {
                    return student;
                }
            }
            return null;
        } catch (error) {
            console.error('Error checking credentials:', error);
            throw error;
        }
    },

};
