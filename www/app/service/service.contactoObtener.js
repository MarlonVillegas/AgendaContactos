   angular.module('AgendaContactos').service('obtenerContactoService', ['$http', function($http){
    
    this.obtenerCon = $http.get('http://localhost/AgendaContactos/www/server.php/obtenerContacto');  
    
    this.eliminarCon = function (data) {
      return $http.post('http://localhost/AgendaContactos/www/server.php/eliminarContacto', $.param(data));
    };
}]);
