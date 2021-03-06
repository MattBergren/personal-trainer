angular.module('app', ['ngRoute', '7minWorkout']).
config(function ($routeProvider, $sceDelegateProvider) {
    $routeProvider.when('/start', {
        templateUrl: 'views/start.html'
    });
    $routeProvider.when('/workout', {
        templateUrl: 'views/workout.html',
        controller: 'WorkoutController'
    });
    $routeProvider.when('/finish', {
        templateUrl: 'views/finish.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/start'
    });
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://*.youtube.com/**']);
});

angular.module('7minWorkout', []);
