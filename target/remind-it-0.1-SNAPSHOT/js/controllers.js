var Controllers = angular.module('Controllers', ['Services']);

Controllers.controller('HomeController', function ($scope, $location) {
    $scope.goHome = function () {
        $location.path("/");
    };

})


