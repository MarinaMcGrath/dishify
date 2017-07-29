const dishifyApp = angular.module('dishifyApp', []);

dishifyApp
  .controller('RecipeListController', ($scope, $http) => {
    $scope.searchRecipes = () => {
      $http.get('/recipes', { params: $scope.query })
        .then((a) => {
          console.log(a.data);
          $scope.recipes = a.data.recipes;
        });
    };
  });

dishifyApp
  .controller('FavoritesController', ($scope) => {
    $scope.favorites = [
      {
        title: 'numbah 1',
      },
      {
        title: 'numbah 2',
      },
      {
        title: 'numbah 3',
      },
    ];
  });
