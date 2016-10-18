//shop Routes brings you to methods on the controller
//opens up http methods using Router

var shopsController = require ('./shopsController');
var shopsRouter = require('express').Router();

//shopsRouter.get('/', shopsController.getAll);

shopsRouter.get('/', (req, res) => {
  // grab db data
  res.render('index');
}); 

module.exports = shopsRouter;