const dishifyApp = angular.module('dishifyApp', []);

dishifyApp
  .controller('RecipeListController', ($scope) => {
    $scope.recipes = [
      {
        name: 'Chicken',
      },
      {
        name: 'Steak',
      },
      {
        name: 'Eggs',
      },
    ];
  });
