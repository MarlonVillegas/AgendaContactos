angular.module('AgendaContactos').controller('agregarController', ['$scope', 'registroContactoService', '$sessionStorage', '$location', 'rolAdmin', '$route', '$timeout', function ($scope, agregarContacto, $sessionStorage, $location, rolAdmin, $route, $timeout) {
        $scope.dataRegistrarContacto = {
            foto: '',
            nombre: '',
            apellido: '',
            telefono: '',
            correo: ''
        };
        $scope.contactoRegistrado = false;

        $scope.submitNuevoContacto = function () {
            agregarContacto.agregarCon($scope.dataRegistrarContacto).then(function successCallback(response) {
                $scope.contactoRegistrado = false;
                $scope.dataRegistrarContacto = {};
                if (response.data.code == 500) {
                } else {
                    $scope.contactoRegistrado = true;
                    $scope.dataRegistrarContacto = '';
//                    $timeout(function () {
//                        $('#nuevoContacto').modal('toggle');
//                    }, 700);
                    $timeout(function () {
                        // $route.reload();
                        //window.location.reload();
                        $location.path('inicio');
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };


    }]);



