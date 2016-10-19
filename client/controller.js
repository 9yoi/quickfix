  //var app = angular.module("viewer", []);

  var ShopsController = function($scope, shopsFactory) {

    $scope.data = {};

    $scope.initializeData = function () {
      console.log('initializing data in frontend controller')
      shopsFactory.getAll()
        .then(function(entries) {
          $scope.data.shops = entries;
        })
        .catch(function(err) {
          console.error(err);
        });
    };

    $scope.initializeData();

  };

  app.controller("ShopsController", ShopsController);
