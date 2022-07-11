const express = require('express')
var mysql = require('mysql');

const app = express()


var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "amir",
    database: "test"
  });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });


con.on('connection', function (connection) {
    console.log('DB Connection established');
})  

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/userinput', function(req, res) {
    console.log(req.query);
    var qry = "INSERT INTO table1 (usename, password) VALUES ('user1', 'use222')";

    con.query(qry, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });

})

app.listen(3000, function() {
    console.log("server started successfully");
})