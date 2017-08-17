weatherApp.controller('homeController', ['$scope','$location' ,'cityService', function($scope, $location, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;    
    });
    $scope.submit = function() {
        $location.path("/forecast");
    }
}]);

weatherApp.controller('forecastController', ['$scope', '$resource','$routeParams' ,'cityService', function($scope, $resource, $routeParams, cityService){
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days, lang: 'vi', units: 'metric', APPID: 'de745af1e5a1cd87a70c84a4bfcdc6fc'});
    console.log($scope.weatherResult);
    
    $scope.covertToDate = function(dt) {
        return new Date(dt * 1000);
    }
    
}]);