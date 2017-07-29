const dishifyApp = angular.module('dishifyApp', []);

dishifyApp
  .controller('LoginController', ($scope, $http) => {
    $scope.login = (name, pass) => {
      $http
        .post('/login', { username: name, password: pass })
        .then((found) => {
          console.log(found);
        });
    };
  });
