var express = require('express');
var app = express();
app.use('/public',express.static('public'));
var path = __dirname + '/views/index.html';

const mySecret = process.env.MESSAGE_STYLE;



app.get('/json', function(req, res) {
  
  if (mySecret === "uppercase") {
    var response = "Hello json".toUpperCase();
  } else {
    var response = "Hello json";
  }
    res.json(response);
  
  
});




































 module.exports = app;
