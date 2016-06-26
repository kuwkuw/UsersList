(function(){
    'use strict';

    angular
        .module('app')
        .controller('signInController', signInController);

    signInController.$inject = ['$scope', 'authService'];

    function signInController($scope, authService){

        $scope.signIn = function(){
            authService.signIn($scope.user);
        }
    }
})();