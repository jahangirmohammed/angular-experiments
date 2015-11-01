'use strict';

// Declare app level module which depends on views, and components
angular.module('experiments', [
  'ngRoute',
  'experiments.actors-search'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/actors-search'});
}]);
