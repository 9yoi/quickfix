var shopsModel = require('./shopsModel');

module.exports = {
  getAll: function (req, res) {
    console.log("getAll in shopsController: ", req.body);
    Shops.find({})
    .then(function(shopsData){
      console.log('shopsData', shopsData)
      res.json(200); 
    }.fail(function(err) {
      console.log('error in getAll', err);
    })
  .}