'use strict'

//Module Angular
var appView = angular.module('appView', ['ngRoute']);

//Routes
appView.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
		when('/Section1', {	templateUrl: 'template/section1.html',	controller: 'Section1Controllers'      	}).
		when('/Section2', {	templateUrl: 'template/section2.html',	controller: 'Section2Controllers' 		});
}]);

appView.controller('Section1Controllers', function($scope) {
	$scope.message = 'Section 1';
});

appView.controller('Section2Controllers', function($scope) {
	$scope.message = 'Section 2';
});
