angular.module('AgendaContactos').controller('agregarController', ['$scope', 'registroContactoService', '$sessionStorage', '$location', 'rolAdmin', '$route', '$timeout', 'Upload', function ($scope, agregarContacto, $sessionStorage, $location, rolAdmin, $route, $timeout, Upload) {
        $scope.file;

        $scope.dataRegistrarContacto = {
            foto: '',
            nombre: '',
            apellido: '',
            telefono: '',
            correo: ''
        };

//    $scope.modeloSoloLetras = '^[a-zA-Z ]+$';
        $scope.contactoRegistrado = false;

        $scope.submitNuevoContacto = function () {

            if ($scope.frmImagen.inputFile.$valid && $scope.dataRegistrarContacto.file) {
                agregarContacto.imagen($scope.dataRegistrarContacto).then(function successCallback(response) {
                }, function errorCallback(response) {
                    
                });
                ;







//                Upload.upload({
//                    url: 'http://localhost/imagenAngularJS/public_html/servidor.php',
//                    data: {file: $scope.file, 'username': 'Julian'}
//                }).then(function (resp) {
//                    console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
//                }, function (resp) {
//                    console.log('Error status: ' + resp.status);
//                }, function (evt) {
//                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
//                    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
//                });

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



