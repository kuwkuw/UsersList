(function(){
    'use strict';

    angular
        .module('app')
        .factory("authHttpService", authHttpService);

    authHttpService.$inject = ['$http', '$q', 'httpHandler'];

    function authHttpService($http, $q, httpHandler){
        var http = httpHandler.http;

        return {
            auth: function(){
                return http({
                    method: 'GET',
                    url: 'api/auth'
                });
            },
            logIn: function(user){
                return http({
                    method: 'POST',
                    url: 'api/login',
                    data: { user: user }
                });
            },
            logOut: function(){
                return http({
                    method: 'GET',
                    url: 'api/logout'
                });
            },
            signIn: function(user){
                return http({
                    method: 'POST',
                    url: 'api/signin',
                    data: { user: user }
                });
            }
        }
    }

})();