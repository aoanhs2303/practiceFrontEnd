var myApp = angular.module('myApp', ['ngMessages']);
myApp.controller('mainController', function($scope, $log, $filter) {
    console.log($log);
    console.log($scope);
//    $log.log("Hello");
//    $log.info("Day la thong tin thao bao");
//    $log.warn("Day la thong tin canh bao");
//    $log.debug("Day la thong tin chi tiet");
//    $log.error("Day la thong tin bao loi");
    $scope.name = "Phuong Nhi";
    $scope.uppercaseName = $filter('uppercase')($scope.name);
    $log.info($scope.name);
    $log.info($scope.uppercaseName);
    
});

