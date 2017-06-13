angular.module('AgendaContactos').controller('editarController', ['$scope', 'editarContactoService', '$sessionStorage', '$location', 'rolAdmin', '$route', '$timeout', function ($scope, editarContacto, $sessionStorage, $location, rolAdmin, $route, $timeout) {

        $scope.edit = {};

        console.log($sessionStorage.datosPersona);

        $scope.edit.id = $sessionStorage.datosPersona.con_id;
        $scope.edit.foto = $sessionStorage.datosPersona.con_foto;
        $scope.edit.nombre = $sessionStorage.datosPersona.con_nombre;
        $scope.edit.apellido = $sessionStorage.datosPersona.con_apellido;
        $scope.edit.telefono = $sessionStorage.datosPersona.con_telefono;
        $scope.edit.correo = $sessionStorage.datosPersona.con_correo;


        $scope.submitEditarContacto = function () {
            if ($scope.frmEditar.inputFile.$valid && $scope.edit.foto !== '') {
                $scope.progresoShow = true;
                editarContacto.editarCon($scope.edit).then(function (response) {

                    $scope.progresoShow = false;
                    $scope.contactoEditado = false;
                    $scope.edit = {};
//                    $timeout(function () {
//                        $('#nuevoContacto').modal('toggle');
//                    }, 700);
//                    $timeout(function () {
//                        // $route.reload();
//                        window.location.reload();
//                        $location.path('inicio');
//                    }, 1000);

                }, function (response) {
                    console.log('Error status: ' + response.status);
                }, function (evt) {
                    console.log(evt.config.data);
                    $scope.progreso = parseInt(100.0 * evt.loaded / evt.total);
//                    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.foto.name);
                });

            } else {
                $scope.erroIMG = true;
            }

//            agregarContacto.agregarCon($scope.dataRegistrarContacto).then(function successCallback(response) {
//                $scope.contactoRegistrado = false;
//                $scope.dataRegistrarContacto = {};
//                if (response.data.code == 500) {
//                } else {
//                    $scope.contactoRegistrado = true;
//                    $scope.dataRegistrarContacto = '';
//                    $timeout(function () {
//                        $('#nuevoContacto').modal('toggle');
//                    }, 700);
//                    $timeout(function () {
//                        // $route.reload();
//                        window.location.reload();
//                        $location.path('inicio');
//                    }, 1000);
//                }
//            }, function errorCallback(response) {
//                console.error(response);
//            });
        };

//        $scope.submitEditarContacto = function () {
//            editarContacto.editarCon($scope.edit).then(function successCallback(response) {
//                $scope.contactoEditado = false;
//                $scope.edit = {};
//                if (response.data.code == 500) {
//                } else {
//                    $scope.contactoEditado = true;
//                    $scope.edit = '';
//                    $timeout(function () {
//                        $('#editarContacto').modal('toggle');
//                    }, 700);
//                    $timeout(function () {
//                        // $route.reload();
//                        window.location.reload();
//                        $location.path('/inicio');
//                    }, 1000);
//                }
//            }, function errorCallback(response) {
//                console.error(response);
//            });
//        };


    }]);



