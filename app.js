const express = require('express');
const app = express();
const morgan = require('morgan');  // log requests to the console (express4)
const bodyParser = require('body-parser'); // pull information from HTML POST (express4)
const path = require('path');
//stuff to be rendered will be looked up in views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//any source files listed in your templates will be looked up here
app.use(express.static(path.join(__dirname, 'public')));

//load db: mongodb and mongoose
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose connected');
});



app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
