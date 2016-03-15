var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.person = {
        name: "Doe, John",
        address: "555 Main St., New York, NY 11111"
    }

    $scope.person1 = {
        name: "Doe, John",
        address: "555 Main St.",
        city: "New York",
        state: "NY",
        zip: "11111"
    }

    $scope.formattedAddress = function(obj) {
        return obj.address + ', ' + obj.city;
    }
    
    $scope.people = [
        {
            name: "New John Doe",
            address: "555 Main St.",
            city: "New York",
            state: "NY",
            zip: "11111"
        },
        {
            name: "Jane Doe",
            address: "555 Main St.",
            city: "New York",
            state: "NY",
            zip: "22222"
        },
        {
            name: "George Doe",
            address: "555 Main St.",
            city: "New York",
            state: "NY",
            zip: "33333"
        }]

    $scope.formattedAddress1 = function(obj) {
        return obj.address + ', ' + obj.city + ', ' + obj.state + ', ' + obj.zip;
    }
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive('textIsolatedScope', function(){
    return {
        templateUrl: 'mydir/searchresult.html',
        replace: true,
        scope: {
            personName: '@',
            personAddressNew: '@personAddress'
        },
        transclude: true
    }
});

myApp.directive('objectTwoWayIsolatedScope', function(){
    return {
        templateUrl: 'mydir/searchresultTwoWay.html',
        replace: true,
        scope: {
            personObject: '='
        },
        transclude: true,
        link: function(scope, elements, attrs){

            console.log("Linking....");

            console.log(scope);

            if(scope.personObject.name == "Doe, John") {
                console.log("I am removing class from linking.");
                elements.removeAttr("class"); 
            }

            console.log(elements);

        }
    }
});

// Transclusion means, Include one document inside another or Place a copy of one
// document at a particular point inside another
myApp.directive('functionIsolatedScope', function(){
    return {
        templateUrl: 'mydir/searchresultFunction.html',
        replace: true,
        scope: {
            personObject: '=',
            formattedAddressFunction: '&'
        },
        transclude: true
    }
});

myApp.directive('repeatDirectives', function(){
    return {
        templateUrl: 'mydir/searchresultFunction.html',
        replace: true,
        scope: {
            personObject: '=',
            formattedAddressFunction: '&'
        },
        transclude: true,
        compile:function(elem, attrs){
            
            console.log('Compiling....');
            //elem.removeAttr("class");
            console.log(elem);

            return {

                pre: function(scope, elements, attrs){

                    console.log("Inside Pre Compiling, Don't use me too much....");

                },

                post: function(scope, elements, attrs){

                    console.log("post-link");

                    console.log(scope);

                    if(scope.personObject.name == "Jane Doe") {
                        console.log("I am removing class.");
                        elements.removeAttr("class"); 
                    }

                    console.log(elements);

                }

            }

        }
    }
});
