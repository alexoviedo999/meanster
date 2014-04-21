angular.module('app', ['ngResource', 'ngRout']);

angular.module('app').configure(funciton($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: '/partials/main', controller: 'mainCtrl'})
});

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.myVar = "Hello Angular";
});
