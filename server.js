const express = require('express');
const app = express();
const path = require('path');
/*var db_connection = require('./db_connection.js');*/

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'https://bbd-api.herokuapp.com'}));

app.use(express.static(__dirname + '/dist/bar-beer-drinker-app'));

//app.listen(process.env.PORT || 8080);

// PathLocationStrategy
app.get('*', function (req, res) {
    //const index = path.join(__dirname, 'dist', 'index.html');
    res.sendFile('dist/bar-beer-drinker-app/index.html' , { root : __dirname});
    //res.sendFile(path.join(__dirname + '/dist/bar-beer-drinker-app/index.html'));
  });

console.log('Console Listening')

