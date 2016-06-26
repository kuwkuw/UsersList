(function(){
    'use strict';

    angular
        .module('app')
        .factory("usersHttpService", usersHttpService);

    usersHttpService.$inject = ['$http', '$q', 'httpHandler'];

    function usersHttpService($http, $q, httpHandler){

        var http = httpHandler.http;

        return {
            update: function(user){
                return http({
                    method: 'PUT',
                    url: 'api/users',
                    data: { user: user }
                });
            },
            add: function(user){
                return http({
                    method: 'POST',
                    url: 'api/users',
                    data: { user: user }
                });
            },
            getUser: function(id){
                return http({
                    method: 'GET',
                    url: 'api/users/'+id
                });
            },
            getAll: function(){
                return http({
                    method: 'GET',
                    url: 'api/users'
                });
            },
            delete: function(id){
                return http({
                    method: 'DELETE',
                    url: 'api/users/'+id,
                    data: { test: 'test' }
                });
            }
        }
    }

})();


