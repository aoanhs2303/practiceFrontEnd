angular.module('ngTab', [])
    .controller('TabController', function($scope){
    $scope.current_tab = 1;
    $scope.changeTab = function(index) {
        $scope.current_tab = index;
    }
    $scope.isActiveTab = function(index) {
        return index === $scope.current_tab;
    }
})