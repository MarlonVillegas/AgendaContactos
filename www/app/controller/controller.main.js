angular.module('AgendaContactos').controller('mainController', ['$scope', '$sessionStorage', '$location', function ($scope, $sessionStorage, $location) {
        $scope.dato;
        $scope.session = $sessionStorage;
        $scope.buscar = function () {
            //$sessionStorage.buscarPersona = $scope.dato;
            $location.path('/formBuscar');
        };
    }]);



