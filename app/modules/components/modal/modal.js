'use strict';

var modalModule = angular.module('modal', []);

modalModule.controller('ModalCtrl', ['$scope', function($scope) {
    var modalViewModel = {
        modalShown: false,
        contentUrl: "modules/components/modal/blank.html"
    };

    $scope.$on("show-modal", function(event, args) {
        console.log("show-modal event");

        modalViewModel.contentUrl = args.contentUrl;
        modalViewModel.modalShown = true;
    });

    $scope.$on("hide-modal", function() {
        console.log("hide-modal event");
        modalViewModel.modalShown = false;
    });

    $scope.modalViewModel = modalViewModel;
}]);

modalModule.directive('modal', function() {
    return {
        restrict: 'AE',
        templateUrl: 'modules/components/modal/modal.html',
        scope: {
            show: '='
        },
        transclude: true,
        link: function($scope, element, attrs) {
            $scope.dialogStyle = {};
            if (attrs.width)
                $scope.dialogStyle.width = attrs.width;
            if (attrs.height)
                $scope.dialogStyle.height = attrs.height;
            $scope.hideModal = function() {
                $scope.show = false;
            };
        }
    }
});