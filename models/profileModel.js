const db = require('../db');

const Profile = {
  create: (data, callback) => {
    const sql = "INSERT INTO Professor (firstName, lastName, email, birthDate, Speciality) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [data.firstName, data.lastName, data.email, data.dob, data.speciality], callback);
  },

  getAll: (callback) => {
    const sql = "SELECT * FROM Professor";
    db.query(sql, callback);
  }
};

module.exports = Profile;
