   angular.module('AgendaContactos').service('editarContactoService', ['$http', function($http){
    
    this.editarCon = function (data) {
      return $http.post('http://localhost/AgendaContactos/www/server.php/editarContacto', $.param(data));
    };    
}]);
