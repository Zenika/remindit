var Controllers = angular.module('Controllers', ['Services']);

Controllers.controller('HomeController', function ($scope, $location, $http) {
	$scope.result = new Object ();
	$scope.result.url = "";
    $scope.goHome = function () {
        $location.path("/");
    };

    $scope.searchText = function () {
    	$http({method:'GET', url:'/api/search', params:{'text' : $scope.search}, headers:{'Accept':'application/json'}}).success(function (data, status, headers, config) {
    		$scope.result = data;
    	});
    }
});


