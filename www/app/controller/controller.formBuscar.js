angular.module('AgendaContactos').controller('formBuscarController', ['$scope', 'formBuscarService', '$sessionStorage', '$location', 'rolAdmin', '$timeout', 'urlUploads', function ($scope, buscar, $sessionStorage, $location, rolAdmin, $timeout, urlUploads) {

        $scope.urlUploads = urlUploads;
        $scope.contactos = [];
//        $scope.buscar = {};
        $scope.buscarp = {};
        $scope.buscarp.persona = $sessionStorage.persona;
        $scope.busquedadFallida = false;

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
                    $scope.busquedadFallida = true;
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




        $scope.eliminar2 = function (dato) {
            $('#eliminarContacto').modal('toggle');
            $scope.nombre = dato.con_nombre;
            $scope.apellido = dato.con_apellido;
            $scope.ideliminar = dato.con_id;
        };

        $scope.submitEliminarContacto = function () {
            buscar.eliminarCon({id: $scope.ideliminar}).then(function successCallback(response) {
                $scope.contactoEliminado = false;
                if (response.data.code == 500) {
                } else {
                    $scope.contactoEliminado = true;
                    $timeout(function () {
                        $('#eliminarContacto').modal('toggle');
                    }, 700);
                    $timeout(function () {
                        // $route.reload();
                        window.location.reload();
                        $location.path('/inicio');
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };


        $scope.editar = function (contacto) {
            $sessionStorage.datosPersona = contacto;
            $location.path('/editar');
        };
    }]);

