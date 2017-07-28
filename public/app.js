const dishifyApp = angular.module('dishifyApp', []);

dishifyApp
    .controller('LoginController', function LoginController($scope) {
        $scope.test = function(name, pass) {
            console.log(name, pass);
        }
});