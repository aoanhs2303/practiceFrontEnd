var myApp = angular.module('myApp', []);
myApp.controller("myController", ['$scope', function ($scope) {
    $scope.newUser = {};
    $scope.clickedUser = {};
    $scope.message = "";
    $scope.users = [
        {
            username: "Phuong Nhi",
            fullName: "Tran Thi Phuong Nhi",
            email: "phuongnhi98@gmail.com"
        },
        {
            username: "Thao Anh",
            fullName: "Le Dinh Thao Anh",
            email: "thaoanh97@gmail.com"
        },
        {
            username: "Minh Ngoc",
            fullName: "Le Thi Minh Ngoc",
            email: "minhngoc2000@gmail.com"
        }
    ];
    $scope.saveUser = function () {
        console.log($scope.newUser.email);
        if ($scope.newUser.username !== undefined) {
            $scope.users.push($scope.newUser);
            $scope.newUser = {};
            $scope.message = "New user added successfully";
        }
    };
    $scope.selectUser = function (user) {
        $scope.clickedUser = user;
    };
    $scope.updateUser = function () {
        $scope.message = "User updated successfully";
    };
    $scope.deleteUser = function () {
        console.log($scope.clickedUser);
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        $scope.message = "User have been deleted";
    };
    $scope.clearMessage = function () {
        $scope.message = "";
    }
}]);
