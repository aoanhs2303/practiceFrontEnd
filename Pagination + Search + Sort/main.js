var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);
app.controller('listdata', ['$scope', '$http', function ($scope, $http) {
    $scope.users = [];
    $scope.search = "";
    $http.get('mockJson/mock.json').success(function (response) {
        $scope.users = response;
    });
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    }
}]);
