angular.module('AgendaContactos').service('formBuscarService', ['$http', function ($http) {

        this.buscarCon = function (data) {
            return $http.post('http://localhost/AgendaContactos/www/server.php/buscarContacto', $.param(data));
        };

        this.eliminarCon = function (data) {
            return $http.post('http://localhost/AgendaContactos/www/server.php/eliminarContacto', $.param(data));
        };
    }]);

