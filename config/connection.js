// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Sabroso@32",
//   database: "burgers_db"
// });

var connection = mysql.createConnection({
  port: 3306,
  host: 'e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'u6r7jt22doygdf6j',
  password: "yw2aq94i2bvcwh99",
  database: "u16posidodimxokx" 
});


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
