(function(){
    'use strict';

    angular
        .module('app')
        .controller('usersController', usersController);

    usersController.$inject = ['$scope', 'usersHttpService', 'authService'];

    function usersController($scope, usersHttpService, authService){
        (function(){
            authService.auth();
            getAll();
        })();

        function getAll(){
            usersHttpService.getAll().then(function(data){
                $scope.users = data;
            });
        }

        $scope.deleteUser = function(id){
            usersHttpService.delete(id).then(function(data){
                $scope.users = data;
            });
        };

        $scope.logOut = function(){
            authService.logOut();
        };
    }
})();
