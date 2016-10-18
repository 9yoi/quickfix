var mongoose = require ('mongoose');

module.exports = function () {

  mongoose.connect('mongodb://localhost/test');

  var db = mongoose.connection;
  
  db.on('error', function (err) {
    console.log('you have an error connecting mongoose', err);
  });

  db.on('open', function() {
    // we're connected!
    console.log('mongoose connected');
  });

};