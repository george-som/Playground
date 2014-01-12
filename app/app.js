'use strict';

var playgroundApp = angular.module('playgroundApp', ['ngRoute', 'shellModule']);

playgroundApp.controller('AppCtrl', ['$scope', function($scope) {
    $scope.appViewModel = {
        appName: "Playground"
    };
}]);