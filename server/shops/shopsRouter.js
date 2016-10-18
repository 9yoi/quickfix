//shop Routes brings you to methods on the controller
//opens up http methods using Router

var shopsController = require ('./shopsController');
var shopsRouter = require('express').Router();

//shopsRouter.get('/', shopsController.getAll);

// for testing only: render static page with fake data
shopsRouter.get('/', (req, res) => {  
  res.render('index');
}); 

//shopsRouter.post('/deal', shopsController.postDeal);

module.exports = shopsRouter;