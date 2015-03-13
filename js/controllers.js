'use strict';

var imdbControllers = angular.module('imdbControllers',  []);

imdbControllers.controller('imdbListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('./data/imdb250.json').success(function(data) {
      $scope.movies = data;
    });
    $scope.query = '';
    $scope.order = 'title';
  }]);

imdbControllers.controller('imdbGalCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('./data/imdb250.json').success(function(data) {
      $scope.movies = data;
    });
    $scope.order = 'title';
    $scope.query = '';  
    $scope.choose = function (genre) {
        $scope.query = genre;
    }  
  }]);

imdbControllers.controller('imdbDetailCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
      $http.get('./data/imdb250.json').success(function(data) {
        $scope.movies = data;
        $scope.theID = $routeParams.imdbID;
   
        $scope.prevID  = function() {
          var ID = parseInt($scope.theID) - 1;;
          if (ID < 0) ID = $scope.movies.length - 1;

          return ID;
        };

        $scope.nextID  = function() {
          var ID = parseInt($scope.theID) + 1;;
          if (ID > $scope.movies.length - 1) ID = 0;

          return ID;
        };

 
      });
      
  }]);

imdbControllers.filter('unique', function() {
   return function(collection, keyname) {
      var output = []; 

      angular.forEach(collection, function(item) {
          var genre = item[keyname];
          angular.forEach(genre, function(item2) {
              
            if(output.indexOf(item2) === -1) {
              output.push(item2);
            }
          });
      });
      return output;
   };
});      


