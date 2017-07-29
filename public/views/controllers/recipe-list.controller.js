const dishifyApp = angular.module('dishifyApp', []);

dishifyApp
  .controller('RecipeListController', ($scope, $http) => {
    $http.get('/recipes')
      .then((a) => {
        $scope.recipe = a.data.recipe;
      });
  });
