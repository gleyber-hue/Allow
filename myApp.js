var express = require('express');
var app = express();
app.use('/public',express.static('public'));
var path = __dirname + '/views/index.html';

app.get('/json', function(req, res) {
  var response = "Hello json".toUpperCase(); // now becomes "HELLO JSON"
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = "Hello json".toUpperCase();
  } else {
    response = "Hello json";
  }
  res.json({"message": response});
  
  
});



































 module.exports = app;
