'use strict';

var shellModule = angular.module('shellModule', ['modal', 'checklist']);

shellModule.controller('ShellCtrl', ['$scope', function($scope) {
    $scope.shellViewModel = {
        message: "Hello World!"
    };
}]);

shellModule.directive('appShell', function() {
    return {
        restrict: 'AE',
        templateUrl: "modules/shell/shell.html"
    };
});