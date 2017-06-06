   angular.module('AgendaContactos').service('obtenerContactoService', ['$http', function($http){
    
    this.obtenerCon = $http.get('http://localhost/AgendaContactos/www/server.php/obtenerContacto');  
}]);
