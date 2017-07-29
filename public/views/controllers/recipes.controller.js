const dishifyApp = angular.module('dishifyApp', []);

dishifyApp
  .controller('FavoritesController', ($scope) => {
    $scope.favorites = [];
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
      console.log($event.currentTarget.id);
      $http
        .post('/favorites', { title: $event.currentTarget.id })
        .then((found) => {
          console.log(found);
        });
    };
  });

// { title: r.title, image_url: r.image_url, source_url: r.source_url }