const express = require('express');
const app = express();
const morgan = require('morgan');             // log requests to the console (express4)
const bodyParser = require('body-parser');    // pull information from HTML POST (express4)
const path = require('path');
// const mongoose = require('mongoose');          // mongoose for mongodb
//app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const routes = require('./routes/index')
app.use('/', routes)

// app.get('/', (req, res) => {
//   console.log(__dirname);
//   res.render(__dirname + '/public/index.ejs');
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
