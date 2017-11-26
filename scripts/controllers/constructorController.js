/* CONSTRUCTOR CONTROLLER */

app.controller('constructorController', function($scope, $routeParams, ergastAPIservice) {
	$scope.id = $routeParams.id;
	$scope.driversList = [];
	$scope.team = null;

	ergastAPIservice.getConstructorDetails($scope.id).success(function(response) {
		document.getElementById('loading-gif').style.display = 'none';
		$scope.team = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0];
	});
	
	ergastAPIservice.getConstructorDrivers($scope.id).success(function(response) {
		$scope.driversList = response.MRData.DriverTable.Drivers;
	});
});