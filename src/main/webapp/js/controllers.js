var Controllers = angular.module('Controllers', ['Services']);

Controllers.controller('HomeController', function ($scope, $location, $http) {
	$scope.results = [];
    $scope.goHome = function () {
        $location.path("/");
    };

    $scope.searchText = function () {
    	$http({method:'GET', url:'/api/search', params:{'text' : $scope.search}, headers:{'Accept':'application/json'}}).success(function (data, status, headers, config) {
    		$scope.results = data;
    	});
    };
    
    $scope.showScreenshot = function (resourceId) {
    	$http({method:'GET', url:'/api/screenshot/'+resourceId, headers:{'Accept':'application/json'}}).success(function (data, status, headers, config) {
    		console.log(data);
    	});
    };
});

Controllers.controller('AuthController', function ($scope, $location, $http) {
	$scope.email = '';
	$scope.password1 = '';
	$scope.password2 = '';
	$scope.unmatchedPwd = false;

	$scope.login = function () {

	}

	$scope.sinup = function () {
		if($scope.password1 === $scope.password2){

		}else{
			$scope.unmatchedPwd = true;
		}
	}
	
});



