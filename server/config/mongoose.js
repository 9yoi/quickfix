var mongoose = require ('mongoose');
var seed = require ('../seed/seed');

var Shops = require('../shops/shopsModel')

module.exports = function () {

  mongoose.connect('mongodb://localhost/mvp');

  var db = mongoose.connection;
  
  db.on('error', function (err) {
    console.log('you have an error connecting mongoose', err);
  });

  db.on('open', function() {
    // we're connected!
    seed();
    console.log('mongoose connected');

  });

};