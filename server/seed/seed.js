var Shop = require ('../shops/shopsModel');
var fakeData = require('../../client/fakeData');

module.exports = function () {
  Shop.find({}).exec()
  .then(function(shops) {
    if(shops.length === 0) {
      fakeData.forEach(function(shop) {    
        Shop.create(shop);
      })
    }
  });
};