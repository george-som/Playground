'use strict';

var checklistModule = angular.module('checklist', []);

checklistModule.controller('ChecklistCtrl', ['$scope', function($scope) {

    var checklistViewModel = {
        isListCompleted: false,
        buttonText: "Not Ready",
        childItemCount: 0,
        completedItems: 0
    };

    $scope.$on('checklist-register', function(args) {
        checklistViewModel.childItemCount++;
    });

    $scope.$on('checklistItem-change', function(event, args) {

        checklistViewModel.completedItems = args.value ? checklistViewModel.completedItems + 1: checklistViewModel.completedItems - 1;

        var isListCompleted = (checklistViewModel.completedItems == checklistViewModel.childItemCount);

        checklistViewModel.isListCompleted = isListCompleted;
        checklistViewModel.buttonText = isListCompleted ? "Done" : "Not Ready";
    });

    $scope.checklistViewModel =  checklistViewModel;
}]);


checklistModule.directive('checklist', function() {
    return {
        restrict: 'AE',
        templateUrl: 'modules/components/checklist/checklist.html'
    };
});