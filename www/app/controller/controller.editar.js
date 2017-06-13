angular.module('AgendaContactos').controller('editarController', ['$scope', 'editarContactoService', '$sessionStorage', '$location', 'rolAdmin', '$route', '$timeout', 'Upload', function ($scope, editarContacto, $sessionStorage, $location, rolAdmin, $route, $timeout, Upload) {

        $scope.edit = {};

        console.log($sessionStorage.datosPersona);

        $scope.edit.id = $sessionStorage.datosPersona.con_id;
        $scope.edit.foto = $sessionStorage.datosPersona.con_foto;
        $scope.edit.nombre = $sessionStorage.datosPersona.con_nombre;
        $scope.edit.apellido = $sessionStorage.datosPersona.con_apellido;
        $scope.edit.telefono = $sessionStorage.datosPersona.con_telefono;
        $scope.edit.correo = $sessionStorage.datosPersona.con_correo;



        $scope.submitEditarContacto = function () {
            editarContacto.editarCon($scope.edit).then(function successCallback(response) {
                $scope.contactoEditado = false;
                $scope.edit = {};
                if (response.data.code == 500) {
                } else {
                    $scope.contactoEditado = true;
                    $scope.edit = '';
                    $timeout(function () {
                        $('#editarContacto').modal('toggle');
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


    }]);



