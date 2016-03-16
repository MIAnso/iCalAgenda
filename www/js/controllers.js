angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('EventsCtrl', function($scope) {
  $scope.events = [
    { date: '24-03-2016', summary: "Jueves Santo", location: "Estado", id: 1 },
    { date: '25-03-2016', summary: "Viernes Santo", location: "Estado", id: 1 },
    { date: '28-03-2016', summary: "Lunes de Pascua", location: "Estado", id: 1 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
