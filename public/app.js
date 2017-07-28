const dishifyApp = angular.module('dishifyApp', []);

dishifyApp
    .controller('LoginController', function LoginController($scope) {
        $scope.test = function(username, password) {
            console.log('i fucking click');
            $scope.name = username;
            $scope.password = password;
        }
});