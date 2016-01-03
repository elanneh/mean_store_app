var storeApp = angular.module('storeApp', ['ngRoute']);

storeApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'MainController',
		controllerAs: 'main',
		templateUrl: '/partials/home.html'
	})	
	.when('/products', {
		controller: 'MainController',
		controllerAs: 'main',
		templateUrl: '/partials/products.html'
	})
	.when('/orders', {
		controller: 'MainController',
		controllerAs: 'main',
		templateUrl: '/partials/orders.html'
	})
	.when('/customers', {
		controller: 'MainController',
		controllerAs: 'main',
		templateUrl: '/partials/customers.html'
	})	
	
	.otherwise('/')
})