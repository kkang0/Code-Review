var mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

var conn = mysql.createConnection({
  host: "localhost",
  port: "9999",
  user: "root",
  password: "root",
  database: "codeReview",
  dateStrings: true,
});

conn.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected to the database");
});

module.exports = conn;
