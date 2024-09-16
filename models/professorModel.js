const db = require('../db');
const bcrypt = require('bcryptjs');  
const saltRounds = 10;

module.exports = {

    addProfessor: async (formateurData) => {
        const { firstName, lastName, email, password, birthDate, adress, Speciality } = formateurData;
        console.log(formateurData);
        
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        return db
            .promise()
            .query(
                `INSERT INTO Professor (firstName, lastName, email, password, adresse, birthDate, created_at, Speciality)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
                [firstName, lastName, email, hashedPassword, adress, birthDate, new Date(), Speciality]
            )
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error inserting formateur:', err);
            });
    },

    checkcridencials: async (formateurData) => {
        const { email, password } = formateurData;
        try {
            const [rows] = await db.promise().query('SELECT * FROM Professor WHERE email = ?', [email]);

            if (rows.length > 0) {
                const professor = rows[0];
                const match = await bcrypt.compare(password, professor.password);
                if (match) {
                    return professor;
                }
            }
            return null;
        } catch (error) {
            console.error('Error checking credentials:', error);
            throw error;
        }
    },

    getclasse: async (id) => {
        const [rows] = await db.promise().query('SELECT * FROM Class WHERE professor_id = ?', [id]);
        if (rows.length > 0)
            return rows[0];
    },
    assignTestToStudents: async (studentIds, testId) => {
        try {
            const queries = studentIds.map(id => {
                return db.promise().query(
                    'INSERT INTO StudentTest (student_id, test_id, pasingDate) VALUES (?, ?, ?)',
                    [id, testId, new Date()]
                );
            });

            await Promise.all(queries);
        } catch (error) {
            console.error('Error assigning test to students:', error);
            throw error;
        }
    },
    renderAssignTestPage: async (req, res) => {
        try {
            const students = await student.getAllStudents();
            res.render('Formateur/Assign', { students });
        } catch (error) {
            console.error("Error fetching students:", error);
            res.status(500).json({ message: "An error occurred while fetching students." });
        }
    },
    getClassCount: async () => {
        const [rows] = await db.promise().query('SELECT COUNT(*) AS count FROM Class');
        return rows[0].count;
    },

    getStudentCount: async () => {
        const [rows] = await db.promise().query('SELECT COUNT(*) AS count FROM Student');
        return rows[0].count;
    },

    getDemandCount: async () => {
        const [rows] = await db.promise().query('SELECT COUNT(*) AS count FROM Demand');
        return rows[0].count;
    },

    getSubjectCount: async () => {
        const [rows] = await db.promise().query('SELECT COUNT(*) AS count FROM Subject');
        return rows[0].count;
    }

};
