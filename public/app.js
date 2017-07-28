const dishifyApp = angular.module('dishifyApp', []);

dishifyApp
    .controller('SignupController', function SignupController($scope, $http) {
        $scope.test = (name, pass) => {
            console.log(name, pass);
            $http.post('/server', {username: name, password: pass});
        }
});