angular.module('AgendaContactos').controller('formBuscarController', ['$scope', 'formBuscarService', '$sessionStorage', '$location', 'rolAdmin', '$timeout', function ($scope, buscar, $sessionStorage, $location, rolAdmin, $timeout) {

        $scope.contactos = [];
//        $scope.buscar = {};
        $scope.buscarp = {};
        $scope.buscarp.persona = $sessionStorage.persona;

        $scope.buscar = function () {
            //$sessionStorage.buscarPersona = $scope.dato;
            $location.path('/formBuscar');
            location.reload(true);
        };

        $scope.buscarContacto = function () {

            console.log($scope.buscarp);

            buscar.buscarCon($scope.buscarp).then(function successCallback(response) {
//        $scope.contactoEliminado = false;
                delete $sessionStorage.persona;
                if (response.data.code == 500) {

                } else {
                    $scope.contactos = response.data.datos;
                    console.log(response.data);


//          $scope.contactoEliminado = true;
//          $timeout(function () {
//            $('#eliminarContacto').modal('toggle');
//          }, 700);
//                    $timeout(function () {
//                        // $route.reload();
//                        window.location.reload();
//                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };

        $scope.buscarContacto();

    }]);

