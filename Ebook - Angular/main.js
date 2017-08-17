var app = angular.module('myApp', []);
app.controller('formCtrl', function ($scope) {
    $scope.master = { Name: "Rahul Saxena", Email: "rahulsaxena@live.com", Password: "PWD", City: "Noida", Country: "India", Mobile: "958100000" };
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
})
