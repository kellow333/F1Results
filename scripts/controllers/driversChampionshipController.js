/* DRIVERS CHAMPIONSHIP CONTROLLER */

app.controller('driversChampionshipController', function($scope, $rootScope, ergastAPIservice) {

	// Reset the nameFilter as only needed on search
	$scope.nameFilter = null;

	// Create an array for the driversList
	$scope.driversList = [];

	// Set defualt year
	if(!$rootScope.year) {
		$rootScope.year = '2016';
	}
	$rootScope.year = $scope.year;

	// Driver passes in the driver objects, this is called from filter : searchFilter in the ng-repeat
	$scope.searchFilter = function(driver) {
		// Returns a regExp, e.g. "vet" search would return /vet/i
		var keyword = new RegExp($scope.nameFilter, 'i');

		// Test - Tests for a match in a string. Returns true or false
		return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
	};

	// Calls the stored driver function
	$scope.change = function() {
		$rootScope.year = this.year;
		ergastAPIservice.getDrivers($rootScope.year).success(function(response) {
			$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
		});
	}

	ergastAPIservice.getDrivers($rootScope.year).success(function(response) {
		document.getElementById('loading-gif').style.display = 'none';
		$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	});
});








