require('../config/mongoose')();

var ShopsModel = require('./shopsModel');
module.exports = {
  getAll: function (req, res) {
    console.log("getAll in shopsController: ", req.body);
    ShopsModel.find({})
    .then(function(shopsData){
      console.log('shopsData', shopsData);
      res.json(200); 
    }).fail(function(err) {
      console.log('error in getAll', err);
    });
  }
}