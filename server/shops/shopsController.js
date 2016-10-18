var shopsModel = require('./shopsModel');

module.exports = {
  getAll: function (req, res) {
    console.log("req in get all: ", req.body);
    res.send(200);
  }
}