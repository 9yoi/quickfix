var express = require('express');
var morgan = require('morgan');  // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var path = require('path');

module.exports = function (app) {
  app.set('views', path.join(__dirname, '/../../client'));   
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  // look for static files in this folder
  app.use(express.static(path.join(__dirname, '/../../client')));
}