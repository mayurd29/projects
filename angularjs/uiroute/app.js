/*var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })
    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'aboutController'
    })
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    })
}); */


// Nested Views Home Page
// Multiple Views About Page
var app = angular.module('routerApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  
  .state('home', {
    url: '/home',
    templateUrl: 'partial-home.html'
  })

  .state('home.list', {
    url: '/list',
    templateUrl: 'partial-home-list.html',
    controller: function($scope){
      $scope.names = ['Mayur', 'Mayurkumar', 'Mayurkumar Rana'];
    }
  })

  .state('home.paragraph', {
    url:'/paragraph',
    template: 'I am a paragraph using ng-router.'
  })

  .state('about', {
    url: '/about',
    views: {

      '': { templateUrl: 'partial-about.html' },

      'columnOne@about': { template: 'Look I am a column !!' },

      'columnTwo@about': { 
        templateUrl: 'table-data.html',
        controller: 'myController'
      }

    }

  });
});

app.controller('myController', function($scope){

  $scope.message = 'test';
   
  $scope.scotches = [
      { name: 'Macallan 12', price: 50 },
      { name: 'Chivas Regal Royal Salute', price: 10000 },
      { name: 'Glenfiddich 1937', price: 20000 }
  ];

});