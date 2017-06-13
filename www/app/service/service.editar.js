   angular.module('AgendaContactos').service('editarContactoService', ['$http', 'Upload', function($http, Upload){
    
    this.editarCon = function (data) {
            // return $http.post('http://localhost/AgendaContactos/www/server.php/agregarContacto', $.param(data));
            return  Upload.upload({
                url: 'http://localhost/AgendaContactos/www/server.php/editarContacto',
                data: data
            });
        };    
}]);
