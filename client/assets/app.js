var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
	$routeProvider
  .when('/', { templateUrl: 'partials/welcome.html'})
  .when('/newroute', {templateUrl:'partials/new_page.html'})
  .otherwise({
    redirectTo: '/'
  });
});
