//all routes available

var shopsRouter = require('../shops/shopsRouter')

module.exports = function (app) {
  app.use('/', shopsRouter);
}
