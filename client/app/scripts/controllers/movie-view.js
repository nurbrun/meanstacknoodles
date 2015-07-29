'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieViewCtrl', function (
  	$scope,
  	$routeParams,
  	Movie
 )  {
  	$scope.viewMovie = true;
  	// helps with adding tabs to the view
  	$scope.movie = Movie.one($routeParams.id).get().$object;
  	// assign movie object via restangular command, one
  	// routeParams.id comes from url declaration :id
  	// passing id from route
  });