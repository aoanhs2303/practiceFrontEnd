var app = angular.module('myApp', []);
app.controller('myController', ['$scope', 'calcFactory', function ($scope, calcFactory) {
    $scope.a = 10;
    $scope.b = 20;
    $scope.doSum = function() {
        $scope.sum = calcFactory.getSum($scope.a, $scope.b);
    }
}])

app.factory('calcFactory', ['$http', '$log', function($http, $log){
    $log.log("instantiating calcFactory...");
    var oCalcService = {};
    oCalcService.getSum = function(a, b) {
        return parseInt(a) + parseInt(b);
    }
    return oCalcService;
}])
