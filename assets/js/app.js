'use strict';

var todoApp = angular.module('todoApp', ['ngRoute', 'ui.bootstrap', 'ngResource']);
todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/modules/employee/todo.html',
      controller: 'EmployeeController'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);
