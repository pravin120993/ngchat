var app = angular.module("chatapp", ["ngMaterial","ui.router"]);
app.controller("initController", function ($scope) {
    $scope.appName = "NG-CHAT";
});
app.controller("sidenavController", function ($scope) {
    $scope.menuList = [];
});