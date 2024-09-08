const db = require('../db');

const Profile = {
  create: (data, callback) => {
    const sql = "INSERT INTO profiles (firstName, lastName, email, dob) VALUES (?, ?, ?, ?)";
    db.query(sql, [data.firstName, data.lastName, data.email, data.dob], callback);
  }
};

module.exports = Profile;
