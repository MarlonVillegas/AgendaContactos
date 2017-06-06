angular.module('AgendaContactos').controller('editarController', ['$scope', 'editarContactoService', '$sessionStorage', '$location', 'rolAdmin', '$route', '$timeout', function ($scope, editarContacto, $sessionStorage, $location, rolAdmin, $route, $timeout) {

    $scope.editar = function (dato) {
            $scope.edit.id = dato.con_id;
            $scope.edit.nombres = dato.con_nombre;
            $scope.edit.apellidos = dato.con_apellido;
            $scope.edit.telefono = dato.con_telefono;
            $scope.edit.correo = dato.con_correo;
            $('#editarContacto').modal('toggle');
        };

        $scope.submitEditarContacto = function () {
            editarContacto.editarCon($scope.edit).then(function successCallback(response) {
                $scope.contactoEditado = false;
                $scope.edit = {};
                if (response.data.code == 500) {
                } else {
                    $scope.contactoEditado = true;
                    $scope.edit = '';
//                    $timeout(function () {
//                        $('#editarContacto').modal('toggle');
//                    }, 700);
                    $timeout(function () {
                        // $route.reload();
                       // window.location.reload();
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };





            }]);



