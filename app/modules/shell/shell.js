var shellModule = angular.module('shellModule', ['checklist']);

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