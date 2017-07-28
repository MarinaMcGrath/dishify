const dishifyApp = angular.module('dishifyApp', []);

dishifyApp
  .controller('SignupController', ($scope, $http) => {
    $scope.test = (name, pass) => {
      $http.post('/signup', { username: name, password: pass });
    };
  });
