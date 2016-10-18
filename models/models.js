var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected');

});

var ShopsSchema = new mongoose.Schema({
  restaurant_name: String,
  logo: Boolean,
  description: String,
  location: String,
  telephone: String,
  meal: String
});

module.exports = mongoose.model('Shops', ShopsSchema);
