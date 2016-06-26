(function(){
    'use strict';

    angular
        .module('app')
        .controller('addEditUserController', addEditUserController);

    addEditUserController.$inject = ['$scope', 'usersHttpService', '$routeParams', '$location'];

    function addEditUserController($scope, usersHttpService, $routeParams, $location){
        console.log($routeParams);
        getUser();

        function getUser(){
            if(!$routeParams.id){
                return;
            }
            usersHttpService.getUser(parseInt($routeParams.id)).then(function(user){
                $scope.user = user;
            });
        }

        $scope.addEditUserSubmit = function(){
            if($scope.user.hasOwnProperty('id')){
                usersHttpService.update($scope.user)
            }else{
                usersHttpService.add($scope.user);
            }

            $location.path('/');
        }
    }
})();
