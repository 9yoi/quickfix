var express = require('express');
var app = express();

require('./config/mongoose')();
require('./config/express')(app);
require('./config/routes')(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
