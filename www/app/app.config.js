angular.module('AgendaContactos').constant('rolAdmin', 1);
angular.module('AgendaContactos').constant('rolCelador', 2);

/**
 * middleware que comprueba las session y los tipos de roles
 */
angular.module('AgendaContactos').config(['$middlewareProvider', function middlewareProviderConfig($middlewareProvider) {
        $middlewareProvider.map({
            'comprobarSession': ['$sessionStorage', function comprobarSession($sessionStorage) {
                    middlewareComprobarSession(this, $sessionStorage);
                }],
            'comprobarNoTenerSession': ['$sessionStorage', function comprobarNoTenerSession($sessionStorage) {
                    middlewareComprobarNoTenerSession(this, $sessionStorage);
                }]
        });
    }]);

angular.module('AgendaContactos').config(['$routeProvider', '$httpProvider', function config($routeProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $routeProvider.
                when('/', {
                    controller: 'loginController',
                    templateUrl: 'app/template/login.html',
                    middleware: ['comprobarNoTenerSession']
                }).
                when('/inicio', {
                    controller: 'inicioController',
                    templateUrl: 'app/template/inicio.html',
                    middleware: ['comprobarSession']
                }).
                when('/agregar', {
                    controller: 'agregarController',
                    templateUrl: 'app/template/agregar.html',
                    middleware: ['comprobarSession']
                }).
                when('/editar', {
                    controller: 'editarController',
                    templateUrl: 'app/template/editar.html',
                    middleware: ['comprobarSession']
                }).
                when('/logout', {
                    controller: 'logoutController',
                    template: '<p>Cerrando sesión...</p>',
                    middleware: ['comprobarSession']
                    
                }).
                otherwise('/');
    }
]);