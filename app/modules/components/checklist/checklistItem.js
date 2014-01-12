'use strict';

checklistModule.controller('ChecklistItemCtrl', ['$scope', function($scope) {
    $scope.checklistItemViewModel = {
        checkboxValue: false,
        notifyChange: function() {
            console.log('checklistValue: ' + this.checkboxValue);

            var args = { value: this.checkboxValue };
            $scope.$emit('checklistItem-change', args);
        }
    };

    $scope.$emit('checklist-register');
}]);

checklistModule.directive('checklistItem', function(){
    return {
        restrict: 'AE',
        templateUrl: 'modules/components/checklist/checklistItem.html'
    };
});

checklistModule.controller('EstimateChecklistItemConfigCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.checklistItemConfigViewModel = {
        heading: "Estimate",
        content: "Required: Original estimate with print image.",
        actions: [
            {
                text: "Add Estimate",
                callback: function() {
                    console.log('Add estimate clicked');
                    var args = { contentUrl: "modules/components/checklist/add-estimate.html" };
                    $rootScope.$broadcast("show-modal", args);;
                }
            },
            {
                text: "Write Estimate",
                callback: function() {
                    console.log('Write estimate clicked');
                    var args = { contentUrl: "modules/components/checklist/write-estimate.html" };
                    $rootScope.$broadcast("show-modal", args);;
                }
            }
        ]
    };
}]);

checklistModule.controller('AttachmentChecklistItemConfigCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.checklistItemConfigViewModel = {
        heading: "Photos & Attachments",
        content: "Required: Minimum of 18 photos of the damage area.",
        actions: [
            {
                text: "Add Attachments",
                callback: function() {
                    console.log('Add Attachments clicked');
                    var args = { contentUrl: "modules/components/checklist/add-attachments.html" };
                    $rootScope.$broadcast("show-modal", args);;
                }
            }
        ]
    };
}]);