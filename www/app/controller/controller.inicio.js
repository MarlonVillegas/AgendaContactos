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
            }]);



