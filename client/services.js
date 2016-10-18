var angular.module('viewer',['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'index.ejs'
    controller: 'MainController'
  });
})
.factory('$shops', function() {

  var getAll = function () {
    return $http({
      method: 'GET',
      url:'/'
    }).then(function(resp) {
      console.log('resp in getAll', resp)
      return resp.data;
    })
  };

  return {
    getAll: getAll; 
  }

}
.controller('MainController', function($scope, $shops)) {

  var name = function () {

  }
}