var app = angular.module("chatapp", ["ngMaterial", "ui.router"]);
app.controller("initController", function ($scope) {
    $scope.appName = "NG-CHAT";
});
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
 $stateProvider.state('register',{
    url: '/register',
    templateUrl: 'chatcontent.html'  
    
  }).state('home',{
    url: '/home',
       templateUrl: 'register.html'
  });
});
app.controller("sidenavController", function ($scope) {
    var imagePath = 'img/list/60.jpg';
    $scope.search = "";
    $scope.messages = [{
        face: imagePath,
        user: 'Ram',
        when: '3:08PM',
        notes: "Good morning"
    }, {
        face: imagePath,
        user: 'Pravin',
        when: '3:08PM',
        notes: "Bye"
    }, {
        face: imagePath,
        user: 'Kumar',
        when: '3:08PM',
        notes: "Dai"
    }, {
        face: imagePath,
        user: 'Ashok',
        when: '3:08PM',
        notes: "OK"
    },{
        face: imagePath,
        user: 'Dinesh',
        when: '3:08PM',
        notes: " I'll be"
    }, {
        face: imagePath,
        user: 'Dinesh',
        when: '3:08PM',
        notes: " I'll be"
    }];
    $scope.serachUser = function () {
        if ($scope.search == "") {
            return $scope.messages;
        } else {
            return $scope.messages.filter(function (obj) {
                return (obj.user.toLowerCase().indexOf($scope.search.toLowerCase()) > -1);
            }).map(function (obj) {
                return obj;
            });
        }
    }
});
app.controller("registrationController", function ($scope) {

});


  
