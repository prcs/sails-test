'use strict';

var todoApp = angular.module('todoApp', ['ngRoute', 'ui.bootstrap', 'ngResource', 'naif.base64']);
todoApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    $routeProvider.when('/', {
      templateUrl: '/templates/modules/employee/todo.html',
      controller: 'EmployeeController'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $locationProvider.hashPrefix('');

  }]);
