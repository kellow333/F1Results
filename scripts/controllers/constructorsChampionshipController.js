/* CONSTRUCTORS CHAMPIONSHIP CONTROLLER */

/* TEAMS CONTROLLER */
app.controller('constructorsChampionshipController', function($scope, $rootScope, ergastAPIservice) {
	
	// Create an array for the teamsList;
	$scope.constructorList = [];

	// Set defualt year
	if(!$rootScope.year) {
		$rootScope.year = '2016';
	}
	$rootScope.year = $scope.year;

	// Calls the stored driver function
	$scope.change = function() {
		$rootScope.year = this.year;
		ergastAPIservice.getConstructors($rootScope.year).success(function(response) {
			$scope.constructorList = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
		});
	}

	ergastAPIservice.getConstructors($rootScope.year).success(function(response) {
		document.getElementById('loading-gif').style.display = 'none';
		$scope.constructorList = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
	});
});