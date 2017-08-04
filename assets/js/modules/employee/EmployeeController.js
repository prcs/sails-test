todoApp.controller(
    'EmployeeController', ['$scope', '$http','EmployeeFactory', 'AuthFactory',
        function ($scope, $http,EmployeeFactory,AuthFactory ) {

        console.log('ok');
        $scope.teste = 'teste';

        $scope.salvar = function(){
            console.log($scope.picture);
            address = $scope.address;
            picture = $scope.picture;
            $scope.user.address = address;
            $scope.user.picture = picture;
            EmployeeFactory.states.save($scope.user,function(retorno) {
                    console.log(retorno);
            }, function(erro) {
                console.log('erro ' + erro);
            });
        };

        $scope.register = function(){

            AuthFactory.local.save($scope.user2,function(retorno) {
                    console.log(retorno);
            }, function(erro) {
                console.log('erro ' + erro);
            });
        };
}]);