var app = angular.module('myApp', ['angularUtils.directives.dirPagination', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'index.html',
        controller: 'myController'
    })
    .when('/checkout', {
        templateUrl: 'checkout.html',
        controller: 'CheckoutCtrl'
    })
}])


app.controller('myController', ['$scope', '$http', function($scope, $http){
    $scope.products = [];
    $http.get('mockJson/mock.json').success(function(data){
        $scope.products = data;    
    });
    $scope.search = "";
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;
    }
    $scope.sort = function(keyname) {
        $scope.sortKey = keyname;
    }
    $scope.sortSl = function () {
        key = $scope.selected;
        switch(key) {
            case 'az':
                $scope.sortKey = 'name';
                $scope.reverse = false;
                break;
            case 'za':
                $scope.sortKey = 'name';
                $scope.reverse = true;
                break;
            case 'giatang':
                $scope.sortKey = 'price';
                $scope.reverse = false;
                break
            case 'giagiam':
                $scope.sortKey = 'price';
                $scope.reverse = true;
                break
        }
    }
}])





