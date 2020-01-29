var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-04.cleardb.net",
  port: 3306,
  user: "b3fed2baff7628",
  password: "c5aafa8c",
  database: "heroku_f1f44e32c5c60b7"
});
//b3fed2baff7628:c5aafa8c@us-cdbr-iron-east-04.cleardb.net/heroku_f1f44e32c5c60b7?reconnect=true

mysql: connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
