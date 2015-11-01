/**
 * Created by jahangirmohammed on 10/30/15.
 */
'use strict';

angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      });
    }])
    .controller('View1Ctrl', ['$scope','$http',function($scope, $http) {
      $scope.searchForActors = function() {
        var $url = "http://www.omdbapi.com/?t="+$scope.movieName+"&y=&plot=short&r=json"
        $http({
          method: 'GET',
          url: $url
        }).then(function successCallback(response) {
          if(response.data.Response)
            $scope.actors = response.data.Actors
          else
            $scope.actors = "Movie not found"

        }, function errorCallback(response) {
          console.log("failure")
        });
        console.log($scope.movieName)
      }
    }]);