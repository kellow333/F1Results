	// create the module and name it scotchApp
	var app = angular.module('F1Results', ['ngRoute']);

	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})

			// route for the Drivers Championship page
			.when('/driversChampionship', {
				templateUrl : 'views/driversChampionship.html',
				controller  : 'driversChampionshipController'
			})

			// route for the individual drivers
			.when('/driversChampionship/:id', {
				templateUrl: 'views/driver.html',
				controller: 'driverController'
			})

			// route for the individual constructors page
			.when('/constructorsChampionship/:id', {
				templateUrl: 'views/constructor.html',
				controller: 'constructorController'
			})

			// route for the Constructors Championship page
			.when('/constructorsChampionship', {
				templateUrl : 'views/constructorsChampionship.html',
				controller  : 'constructorsChampionshipController'
			})

			// route for the circuits page
			.when('/circuits', {
				templateUrl : 'views/circuits.html',
				controller  : 'circuitsController'
			});	
	});