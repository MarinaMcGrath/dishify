const dishifyApp = angular.module('dishifyApp', []);

dishifyApp
    .controller('SignupController', function SignupController($scope, $http) {
        $scope.test = (name, pass) => {
            console.log(name, pass);
            $http.post('/signup', {username: name, password: pass});
        }
});