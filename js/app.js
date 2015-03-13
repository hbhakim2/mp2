var imdbApp = angular.module('imdbApp', [
  'ngRoute',
  'imdbControllers'
]);

imdbApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'imdbListCtrl'
      }).
      when('/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'imdbGalCtrl'
      }).
      when('/detail/:imdbID', {
        templateUrl: 'partials/details.html',
        controller: 'imdbDetailCtrl'
      }).
      otherwise({
        redirectTo: '/list'
      });
  }]);      


var myApp = angular.module('myApp', [
  'ngRoute',
  'myControllers'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/list', {
        templateUrl: 'partials/highlight.html',
        controller: 'myHighlightCtrl'
      }).
      otherwise({
        redirectTo: '/list'
      });
  }]);      

