const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('${__dirname}/bar-beer-drinker-app/dist/'));

app.listen(process.env.PORT || 8080);

// PathLocationStrategy
app.get("/", function(req, res){
    res.sendFile("index.html", {"root": __dirname});
});

console.log('Console Listening')