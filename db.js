const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "express_db"
});
connection.connect();
module.exports = connection;
