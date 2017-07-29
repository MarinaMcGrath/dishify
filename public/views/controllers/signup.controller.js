const dishifyApp = angular.module('dishifyApp', []);

dishifyApp
  .controller('SignupController', ($scope, $http) => {
    $scope.signup = () => {
      $http.post('/signup', { username: $scope.name, password: $scope.pass })
        .then((found) => {
          window.location.href = found.data;
        });
    };
  });
