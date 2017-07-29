const dishifyApp = angular.module('dishifyApp', []);

dishifyApp
  .controller('LoginController', ($scope, $http) => {
    $scope.login = () => {
      $http
        .post('/login', { username: $scope.name, password: $scope.pass })
        .then((found) => {
          window.location.href = found.data;
        });
    };
  });
