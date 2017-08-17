var app = angular.module('myApp', []);
app.controller('myController', ['$scope', '$http', function($scope, $http){
    $scope.search = "";
    $scope.users = [];
    $http.get("mockJson/mock.json").success(function(response){ 
        $scope.users = response; 
    });
    
}]);