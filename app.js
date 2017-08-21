var app = angular.module("chatapp", ["ngMaterial", "ui.router"]);
app.controller("initController", function ($scope) {
    $scope.appName = "NG-CHAT";
});
app.controller("sidenavController", function ($scope) {
    var imagePath = 'https://material.angularjs.org/latest/img/list/60.jpeg';
    $scope.messages = [{
      face : imagePath,
      what: 'Rapidcare IT',
      who: 'Ram :',
      when: '3:08PM',
      notes: " Good morning"
    }, {
      face : imagePath,
      what: 'Pravin IT',
      who: 'You :',
      when: '3:08PM',
      notes: "Bye"
    }, {
      face : imagePath,
      what: 'RC suresh',
      who: 'You :',
      when: '3:08PM',
      notes: "Dai"
    }, {
      face : imagePath,
      what: 'Dhinesh',
      who: 'You :',
      when: '3:08PM',
      notes: "OK"
    }, {
      face : imagePath,
      what: 'IT GUYS',
      who: 'Ram :',
      when: '3:08PM',
      notes: " I'll be"
    }];
  });


  
