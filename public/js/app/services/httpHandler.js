(function(){
    'use strict';

    angular
        .module('app')
        .factory("httpHandler", httpHandler);

    httpHandler.$inject = ['$http', '$q'];

    function httpHandler($http, $q){


        return {
            http: function(options){
                var deferred = $q.defer();

                $http(options).then(function(data){
                        deferred.resolve(data.data);
                    },
                    function(reason){
                        deferred.reject(reason);
                    });

                return deferred.promise;
            }
        }
    }

})();
