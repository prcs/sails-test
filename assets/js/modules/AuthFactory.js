todoApp.factory('AuthFactory', ['$resource', function ($resource) {

    return {
      local: $resource("/auth/local/:action"),
      provider: $resource('/auth/:provider/callback')
    };
}]);