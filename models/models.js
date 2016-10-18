var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var ShopsSchema = new mongoose.Schema({
  restaurant_name: String,
  logo: Boolean,
  description: String,
  location: String,
  telephone: String,
  meal: String
});

module.exports = mongoose.model('Shops', ShopsSchema);
