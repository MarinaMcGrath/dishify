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
      $http
        .post('/favorites', { title: $event.currentTarget.id })
        .then((found) => {
          console.log('in addFav', found);
        });
    };
  });

// { title: r.title, image_url: r.image_url, source_url: r.source_url }
