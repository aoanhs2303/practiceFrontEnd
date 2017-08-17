var app = angular.module('myApp', ['angularUtils.directives.dirPagination', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/store', {
        templateUrl: 'template/store.html',
        controller: 'storeController'
    })
    .when('/store/:storeId', {
        templateUrl: 'template/single.html',
        controller: 'singleController'
    })
    .otherwise({
        redirectTo: '/store'
    })
}])


app.controller('storeController', ['$scope', '$http', function($scope, $http){
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
}]);

app.controller('singleController', ['$scope', '$http', '$routeParams', '$filter', function($scope, $http, $routeParams, $filter) {
    var productId = $routeParams.storeId;
    $http.get('mockJson/mock.json').success(function(data){
        $scope.product = $filter('filter')(data, function(d) {
            return d.id == productId;
        })[0];
    });
    console.log(productId);
}])




