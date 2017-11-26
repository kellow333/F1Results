/* SERVICES */

// $http tells Angular’s dependency injection engine that our new service requires (or depends on) the $http service
app.factory('ergastAPIservice', function($http) {
	// Create an object
	var ergastAPI = {};

	ergastAPI.getDrivers = function(year) {
		return $http({
			method: 'JSONP',
			url: 'http://ergast.com/api/f1/' + year + '/driverStandings.json?callback=JSON_CALLBACK'
		});
	}

	ergastAPI.getDriverDetails = function(id, year) {
		return $http({
			method: 'JSONP',
			url: 'http://ergast.com/api/f1/' + year + '/drivers/' + id + '/driverStandings.json?callback=JSON_CALLBACK' 
		});
	}

	ergastAPI.getDriverRaces = function(id, year) {
		return $http({
			method: 'JSONP',
			url: 'http://ergast.com/api/f1/' + year + '/drivers/' + id + '/results.json?callback=JSON_CALLBACK'
		});
	}

	ergastAPI.getConstructors = function(year) {
		return $http({
			method: 'JSONP',
			url: 'http://ergast.com/api/f1/' + year +'/constructorStandings.json?callback=JSON_CALLBACK'
		});
	}

	ergastAPI.getConstructorDetails = function(id) {
		return $http({
			method: 'JSONP',
			url: 'http://ergast.com/api/f1/2014/constructors/' + id + '/constructorStandings.json?callback=JSON_CALLBACK'
		});
	}

	ergastAPI.getConstructorDrivers = function(id) {
		return $http({
			method: 'JSONP',
			url: 'http://ergast.com/api/f1/2014/constructors/' + id + '/drivers.json?callback=JSON_CALLBACK'
		});
	}
	return ergastAPI;
});