require('../config/mongoose')();
var Q = require('q');
var Shop = require('./shopsModel');


// Promisify a few mongoose methods with the `q` promise library
var findAllShops = Q.nbind(Shop.find, Shop);

module.exports = {

  getAll: function (req, res, next) {
    findAllShops({})
    //.exec()
    .then(function(shopsData){
      console.log('shopsData length', shopsData);
      res.send(shopsData);
    }).catch(function(err) {
      console.log('error in getAll', err);
    });
  }

  //postDeal: function (req, res, next) {
  //   Shop.create({
  //     restaurant_name: 'Flipopia',
  //     'logo': 'http://placehold.it/150x150',
  //     'description': 'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
  //     'location': '61376 Crescent Oaks Parkway',
  //     'telephone': '7-(347)953-4961',
  //     'meal': 'luctus et ultrices posuere cubilia'
  //   })
  //   .then()
  //   .
  // }
}