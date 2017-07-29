const dishifyApp = angular.module('dishifyApp', []);

dishifyApp
  .controller('FavoritesController', ($scope, $http) => {
    $http.get('/favorites')
      .then((result) => {
        $scope.favorites = result.data;
      });
  });

dishifyApp
  .controller('RecipeListController', ($scope, $http) => {
    $scope.searchRecipes = () => {
      $http.get('/recipes', {
        params: {
          q: $scope.query,
        },
      })
        .then((a) => {
          $scope.recipes = a.data.recipes;
        });
    };
    $scope.addFavorite = ($event) => {
      const recipe = JSON.parse($event.currentTarget.id);
      $http.post('/favorites', {
        title: recipe.title,
        image_url: recipe.image_url,
        source: recipe.f2f_url,
      })
        .then((found) => {
          console.log('in addFav', found.data);
        });
    };
  });
