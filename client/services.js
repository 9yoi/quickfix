var app = angular.module('viewer');

var configSettings = function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'index.ejs'
    controller: 'shopsController'
  });
};

var shopsFactory = function($http) {

  var getAll = function () {
    return $http({
      method: 'GET',
      url:'/'
    }).then(function(resp) {
      console.log('resp in factory $Shop getAll', resp)
    })
  };

  return {
    getAll: getAll; 
  }

});

app.config(configSettings);
app.factory($Shops, shopsFactory)