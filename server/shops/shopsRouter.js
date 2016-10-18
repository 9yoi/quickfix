//shop Routes brings you to methods on the controller
//opens up http methods using Router

var shopsController = require ('./shopsController');
var shopsRouter = require('express').Router();

shopsRouter.get('/', shopsController.getAll);

module.exports = shopsRouter;