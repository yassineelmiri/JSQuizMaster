const db = require('../db');

module.exports = {
    getAllTests: () => {
        const result = db
            .promise()
            .query('SELECT * FROM Test')
            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching tests:", err);
            });
        return result;
    },
    getOneTest: (id) => {
        const result = db
            .promise()
            .query(`SELECT * FROM Test where id = ${id}`)
            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching test:", err);
            });
        return result;
    },
    addTest: (data) => {
        return db
            .promise()
            .query(
                `INSERT INTO Test (Name, testDate, Description, professor_id)
                    VALUES (?, ?, ?, ?);`,
                [data.Name, data.testDate, data.Description, data.professor_id]
            )
            .then(([result]) => {
                return result.insertId;
            })
            .catch((err) => {
                console.error('Error inserting test:', err);
            });
    },

    updateTest: (id, data) => {
        return db
            .promise()
            .query(`UPDATE Test 
                SET Name=?, testDate=?, Description=?, professor_id=?
                WHERE id = ${id};`,
                [data.Name, data.testDate, data.Description, data.professor_id])
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error updating test', err);
            });
    },
    deleteTest: (id) => {
        return db
            .promise()
            .query(`DELETE FROM Test WHERE id = ${id}`)
            .then(([result]) => result)
            .catch((err) => {
                console.error('Error deleting test:', err);
            });
    },
    getStudentTest: async (id) => {
         const result = db
            .promise()
            .query(`SELECT 
    StudentTest.score, 
    StudentTest.repeats, 
    Test.Name, 
    Test.Description, 
    Professor.firstName AS ProfessorName, 
    Professor.email, 
    Professor.Speciality AS ProfessorSpeciality,
    Student.firstName AS StudentName
FROM 
    StudentTest
JOIN 
    Test ON StudentTest.Test_id = Test.id
JOIN 
    Professor ON Test.Professor_id = Professor.id
JOIN 
    Student ON StudentTest.Student_id = Student.id
WHERE 
    Student.id =  ?`,[id])
            .then(([result]) => result)
            .catch((err) => {
                console.error("Error fetching test:", err);
            });
        return result;
    }
};

