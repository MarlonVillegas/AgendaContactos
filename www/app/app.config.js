angular.module('AgendaContactos').constant('rolAdmin', 1);
angular.module('AgendaContactos').constant('rolCelador', 2);


angular.module('AgendaContactos').config(['$routeProvider', '$httpProvider', function config($routeProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $routeProvider.
                when('/', {
                    controller: 'loginController',
                    templateUrl: 'app/template/login.html'
                }).
                when('/inicio', {
                    controller: 'inicioController',
                    templateUrl: 'app/template/inicio.html'
                }).
                when('/agregar', {
                    controller: 'agregarController',
                    templateUrl: 'app/template/agregar.html'
                }).
                when('/editar', {
                    controller: 'editarController',
                    templateUrl: 'app/template/editar.html'
                }).
                otherwise('/');
    }
]);