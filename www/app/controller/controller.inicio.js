angular.module('AgendaContactos').controller('inicioController', ['$scope', 'obtenerContactoService', '$sessionStorage', '$location', 'rolAdmin', '$route', '$timeout', function ($scope, obtenerContacto, $sessionStorage, $location, rolAdmin, $route, $timeout) {
        $scope.contactos = [];
        $scope.pintarTabla = function () {
            obtenerContacto.obtenerCon.then(function successCallback(response) {
                switch (response.data.code) {
                    case 200:
                        $scope.contactos = response.data.datos;
                        break;
                    case 500:
                        $scope.contactos = [];
                }
            });
        };

        $scope.pintarTabla();
        
        $scope.eliminar = function (dato) {
            $('#eliminarContacto').modal('toggle');
            $scope.nombre = dato.con_nombre;
            $scope.ideliminar = dato.con_id;
        };

        $scope.submitEliminarContacto = function () {
            obtenerContacto.eliminarCon({id: $scope.ideliminar}).then(function successCallback(response) {
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
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };
        
          $scope.editar = function (contacto){
            $sessionStorage.datosPersona = contacto;
            $location.path('/editar');
        };
        
            }]);



