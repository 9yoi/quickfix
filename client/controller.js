  var app = angular.module("viewer", []);

  var ShopsController = function($scope) {

    $scope.shopsData = window.shopsData;

    // $scope.data = {};

    // var initializedata = function () {
    //   console.log('initializing data in front controller')
    //   $Shops.getAll()
    //     .then(function(entries) {
    //       $scope.data.shops = entries;
    //     })
    //     .catch(function(err) {
    //       console.error(err);
    //     });
    // };

    // initializedata();

};


  app.controller("ShopsController", ShopsController);
