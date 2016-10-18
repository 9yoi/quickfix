  var app = angular.module("viewer", []);

  var ShopsController = function($scope) {

    $scope.shopsData = window.shopsData;

  };
  
  app.controller("ShopsController", ShopsController);

