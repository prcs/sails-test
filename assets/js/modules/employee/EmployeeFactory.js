todoApp.factory('EmployeeFactory', ['$resource', function ($resource) {

    return {
      states: $resource("/employee/:usuarioId"),
      login: $resource('/employee/login',{
        query: { method: 'POST' }
      })
    };
}]);