const db = require('../db');

const Test = {
  create: (data, callback) => {
    const query = `
      INSERT INTO Test (Name, testDate, Description, professor_id)
      VALUES (?, ?, ?, ?)
    `;
    db.query(query, [data.Name, data.testDate, data.Description, data.professor_id], callback);
  }
};

module.exports = Test;
