var app = angular.module('formValidationApp', []);

app.controller('mainController', ['$scope', function($scope){

	$scope.submitForm = function(isValid){

		if(isValid) alert('form validation is cool !!');

	}

}]);