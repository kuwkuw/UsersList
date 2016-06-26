(function(){
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope', 'authService'];

    function loginController($scope, authService){

        $scope.logIn = function(){
            authService.logIn($scope.user, function(msg){
                $scope.msg = "Wrong password or email";
            });
        }
    }
})();
