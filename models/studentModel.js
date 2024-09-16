const db = require("../db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  getAllStudents: async () => {
    try {
      const [rows] = await db.promise().query("SELECT * FROM Student");
      return rows;
    } catch (error) {
      console.error("Error fetching students:", error);
      throw error;
    }
  },
  getStudents: async (class_id) => {
    try {
      const [result] = await db
        .promise()
        .query("SELECT * FROM Student WHERE class_id = ?", [class_id]);
      return result;
    } catch (err) {
      console.error("Error fetching students:", err);
      throw err;
    }
  },

  addStudent: async (data) => {
    const {
      firstName,
      lastName,
      email,
      password,
      birthDate,
      adress,
      classe_id,
    } = data;
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const [result] = await db.promise().query(
        `INSERT INTO Student (firstName, lastName, email, password, adresse, birthDate, RegistrationDate, class_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          firstName,
          lastName,
          email,
          hashedPassword,
          adress,
          birthDate,
          new Date(),
          classe_id,
        ]
      );
      return result;
    } catch (err) {
      console.error("Error inserting student:", err);
      throw err;
    }
  },

  findById: async (id) => {
    try {
      const [result] = await db
        .promise()
        .query("SELECT * FROM Student WHERE id = ?", [id]);
      return result[0];
    } catch (err) {
      console.error("Error fetching student by ID:", err);
      throw err;
    }
  },

  updateStudent: async (data) => {
    const { firstName, lastName, adress, id } = data;
    try {
      const [result] = await db
        .promise()
        .query(
          "UPDATE Student SET firstName = ?, lastName = ?, adresse = ? WHERE id = ?",
          [firstName, lastName, adress, id]
        );
      return result;
    } catch (err) {
      console.error("Error updating student:", err);
      throw err;
    }
  },

  delete: async (id) => {
    try {
      const [result] = await db
        .promise()
        .query("DELETE FROM Student WHERE id = ?", [id]);
      return result;
    } catch (err) {
      console.error("Error deleting student:", err);
      throw err;
    }
  },

  getDemandes: async () => {
    try {
      const [rows] = await db.promise().query("SELECT * FROM Demand");
      return rows;
    } catch (error) {
      console.error("SQL query error:", error.message);
      throw error;
    }
  },

  acceptDemande: async (id) => {
    try {
      const [result] = await db
        .promise()
        .query("UPDATE Demand SET Accepted = 1 WHERE id = ?", [id]);
      return result;
    } catch (err) {
      console.error("Error accepting demande:", err);
      throw err;
    }
  },

  rejectDemande: async (id) => {
    try {
      const [result] = await db
        .promise()
        .query("UPDATE Demand SET Accepted = 0 WHERE id = ?", [id]);
      return result;
    } catch (err) {
      console.error("Error rejecting demande:", err);
      throw err;
    }
  },
};
