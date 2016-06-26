(function(){
    'use strict';

    angular.module('app',['ngRoute', 'ngCookies'])
        .config(function($routeProvider, $locationProvider){
            $routeProvider.
                when('/', {
                    templateUrl: 'partials/users',
                    controller: 'usersController'
                }).
                when('/addEditUser', {
                    templateUrl: 'partials/addEditUser',
                    controller: 'addEditUserController'
                }).
                when('/addEditUser/:id', {
                    templateUrl: 'partials/addEditUser',
                    controller: 'addEditUserController'
                }).
                when('/login', {
                    templateUrl: 'partials/login',
                    controller: 'loginController'
                }).
                when('/signin', {
                    templateUrl: 'partials/signin',
                    controller: 'signInController'
                }).
                otherwise({
                    redirectTo: '/'
                });

            //$locationProvider.html5Mode(true);
        });
})();
