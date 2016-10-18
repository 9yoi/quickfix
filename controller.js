  var app = angular.module("viewer", []);

  var ShopsController = function($scope) {

    $scope.shopsData = window.shopsData;
    // $scope.currPhoto = imageData[0];

    // $scope.updatePhoto = function (newPhoto) {
    //   console.log(newPhoto);
    //   $scope.currPhoto = newPhoto;
    // }

  };
  app.controller("ShopsController", ShopsController);

