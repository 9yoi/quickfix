
var app = angular.module('viewer', ["ngRoute"]);

var configSettings = function($routeProvider) {
  $routeProvider
  .when('/start', {
    templateUrl: 'index.ejs',
    controller: 'ShopsController'
  });
};

var shopsFactory = function($http) {

  var getAll = function () {
    return $http({
      method: 'GET',
      url:'/data'
    }).then(function(res) {
      return res.data;
    })
  };

  return {
    getAll: getAll 
  }

};

app.config(configSettings);
app.factory("shopsFactory", shopsFactory)