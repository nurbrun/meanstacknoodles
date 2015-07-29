'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieAddCtrl', function(
  	$scope,
  	Movie,
  	// Movie is a restangular object
  	$location
  	)
  {
  	$scope.movie = {};
  	$scope.saveMovie = function () {
  		// call restangular Movie object and post to url
  		Movie.post($scope.movie).then(function(){
  			$location.path('/movies');
  		});
  	};
});
