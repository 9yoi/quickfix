const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('getting index');
});

app.listen(3000, function () {
  console.log('QuickFix app listening on port 3000!');
});