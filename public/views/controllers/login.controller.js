const dishifyApp = angular.module('dishifyApp', []);

dishifyApp
  .controller('LoginController', ($scope, $http) => {
    $scope.login = () => {
      $http
        .get('/login', {
          params: {
            username: $scope.name,
            password: $scope.pass,
          },
        })
        .then((found) => {
          window.location.href = found.data;
        });
    };
  });
