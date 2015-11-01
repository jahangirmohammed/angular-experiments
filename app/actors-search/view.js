/**
 * Created by jahangirmohammed on 10/30/15.
 */
'use strict';

angular.module('experiments.actors-search', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/actors-search', {
        templateUrl: 'actors-search/view.html',
        controller: 'ActorsSearchController'
      });
    }])
    .controller('ActorsSearchController', ['$scope','$http',function($scope, $http) {
      $scope.searchForActors = function() {
        var $url = "http://www.omdbapi.com/?t="+$scope.movieName+"&y=&plot=short&r=json"
        $http({
          method: 'GET',
          url: $url
        }).then(function successCallback(response) {
          if(response.data.Actors){
            $scope.actors = response.data.Actors.split(",")
          }
          else {
            $scope.actors = []
          }
        }, function errorCallback(response) {
        });
      }
    }]);