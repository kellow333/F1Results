/* DRIVER CONTROLLER */

app.controller('driverController', function($scope, $routeParams, $rootScope, ergastAPIservice) {
	$scope.id = $routeParams.id;
	$scope.races = [];
	$scope.driver = null;

	if(!$rootScope.year) {
		$rootScope.year = '2016';
	}

	ergastAPIservice.getDriverDetails($scope.id, $rootScope.year).success(function(response) {
		$scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
	});

	ergastAPIservice.getDriverRaces($scope.id, $rootScope.year).success(function(response) {
		document.getElementById('loading-gif').style.display = 'none';
		$scope.races = response.MRData.RaceTable.Races;
	});
});