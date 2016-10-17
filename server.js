var express = require('express');
var app = new express();
var path = require('path');

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  //res.send("hello world");
  res.render('./../views/index.ejs');
});

app.listen(3000, function () {
  console.log('QuickFix app listening on port 3000!');
});