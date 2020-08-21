const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(
    process.env.JAWSDB_URL
  );
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
<<<<<<< HEAD
    password: "Phoenix11!",
=======
    password: ")F*WGUsVpV",
>>>>>>> 68439bcb16d1bbb83f8104f09dba314a138135de
    database: "userInfo_db",
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
