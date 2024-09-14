const db = require('../db');


const testModel = {
    getAllTests: () => {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM Test";
            db.query(query, (err, results) => {
                if (err) {
                    console.error("Error fetching tests from DB:", err);
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
,

    getOneTest: (id) => {
        const query = 'SELECT * FROM Test WHERE id = ?';
        return db.query(query, [id]);
    },

    addTest: (data) => {
        const query = 'INSERT INTO Test (Name, testDate, Description, professor_id) VALUES (?, ?, ?, ?)';
        return db.query(query, [data.Name, data.testDate, data.Description, data.professor_id]);
    },

    updateTest: (id, data) => {
        const query = 'UPDATE Test SET Name = ?, testDate = ?, Description = ?, professor_id = ? WHERE id = ?';
        return db.query(query, [data.Name, data.testDate, data.Description, data.professor_id, id]);
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


module.exports = testModel;
