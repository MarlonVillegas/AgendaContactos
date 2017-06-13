angular.module('AgendaContactos').controller('agregarController', ['$scope', 'registroContactoService', '$sessionStorage', '$location', 'rolAdmin', '$route', '$timeout', 'Upload', function ($scope, agregarContacto, $sessionStorage, $location, rolAdmin, $route, $timeout, Upload) {

        $scope.progreso = 0;
        $scope.progresoShow = false;
        $scope.erroIMG = false;
        $scope.dataRegistrarContacto = {
            foto: '',
            nombre: '',
            apellido: '',
            telefono: '',
            correo: ''
        };
        $scope.modeloSoloLetras = '^[a-zA-Z ]+$';

        $scope.hola = function () {
            console.log(dataRegistrarContacto.foto);
        };

        $scope.contactoRegistrado = false;

        $scope.submitNuevoContacto = function () {
            if ($scope.frmAgregar.inputFile.$valid && $scope.dataRegistrarContacto.foto !== '') {
                $scope.progresoShow = true;
                agregarContacto.agregarCon($scope.dataRegistrarContacto).then(function (response) {

                    $scope.progresoShow = false;
                    $scope.contactoRegistrado = true;
                    $scope.dataRegistrarContacto = '';
//                    $timeout(function () {
//                        $('#nuevoContacto').modal('toggle');
//                    }, 700);
                    $timeout(function () {
                        // $route.reload();
//                        window.location.reload();
                        $location.path('inicio');
                    }, 1000);

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


    }]);



