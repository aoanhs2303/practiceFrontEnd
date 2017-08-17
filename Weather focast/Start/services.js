//Services

weatherApp.service('cityService', function(){
    this.city = "Ha Noi";
});

//weatherApp.service('weatherService', ['$resource', function(){
//    this.GetWeather = function(city, days) {
//        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
//        var weatherResult = $scope.weatherAPI.get({q: city, cnt: days, lang: 'vi', units: 'metric', APPID: 'de745af1e5a1cd87a70c84a4bfcdc6fc'});
//        
//        return weatherResult;
//    }
//    
//}])