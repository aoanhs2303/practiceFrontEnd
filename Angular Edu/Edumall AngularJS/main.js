var myApp = angular.module('myApp', []);
myApp.controller('mainController', function($scope) {
    console.log($scope);
});

var searchPerson = function($scope ,firstName, lastName, email, city, job) {
    return 'Hoa Le';
}

console.log(angular.injector().annotate(searchPerson));

console.log(searchPerson);

var searchPersonString = searchPerson.toString();

console.log(searchPersonString);