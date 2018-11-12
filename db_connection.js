var mysql = require('mysql');

var con = mysql.createConnection({
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "b2bfee3d6276cf",
    password: "4afb5aa1"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


  console.log("I'd Love It If We Made It");