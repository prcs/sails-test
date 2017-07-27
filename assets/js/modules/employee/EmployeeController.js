todoApp.controller(
    'EmployeeController', ['$scope', '$http','EmployeeFactory',
        function ($scope, $http,EmployeeFactory ) {

        console.log('ok');
        $scope.teste = 'teste';

        $scope.salvar = function(){
            address = $scope.address;
            $scope.user.address = address;
            EmployeeFactory.states.save($scope.user,function(retorno) {
                    console.log(retorno);
            }, function(erro) {
                console.log(erro);
            });
        };
}]);