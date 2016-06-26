(function(){
    'use strict';

    angular
        .module('app')
        .factory("authService", authService);

    authService.$inject = ['$window', 'authHttpService', '$location'];

    function authService($window, authHttpService, $location){
        return {
            auth: function(){
                authHttpService.auth()
                    .then(function(data){
                        if(!data.token || !$window.sessionStorage.token
                            || $window.sessionStorage.token != data.token){
                            $location.path('/login');
                        }
                    })
            },
            logIn: function(user, callback){
                return authHttpService.logIn(user).then(function(data){
                    if(!data.token){
                        callback("Wrong password or email");
                        return;
                    }
                    $window.sessionStorage.token = data.token;
                    $location.path('/');
                });
            },
            logOut: function(){
                authHttpService.logOut();
                delete $window.sessionStorage.token;
                $location.path('/login');
            },
            signIn: function(user){
                authHttpService.signIn(user)
                    .then(function(data){
                        $window.sessionStorage.token = data.token;
                        $location.path('/');
                    });
            }
        }
    }

})();