   angular.module('AgendaContactos').service('registroContactoService', ['$http', function($http){
    
    this.agregarCon = function (data) {
      return $http.post('http://localhost/AgendaContactos/www/server.php/agregarContacto', $.param(data));
    };    
}]);
