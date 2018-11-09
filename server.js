const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

// PathLocationStrategy
app.get('*', function (req, res) {
    //const index = path.join(__dirname, 'dist', 'index.html');
    res.sendFile('dist/bar-beer-drinker-app/index.html' , { root : __dirname}); blank page
    //res.sendFile(path.join(__dirname + '/dist/bar-beer-drinker-app/index.html'));
  });

console.log('Console Listening')