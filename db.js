const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST || "localhost", 
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "admin",
    database: process.env.MYSQL_DATABASE || "jcc",
  });
  

function connectWithRetry() {
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err.stack);
      setTimeout(connectWithRetry, 2000);
    } else {
      console.log("Connected to MySQL");
    }
  });
}

connectWithRetry();

module.exports = db;