var checklistModule = angular.module('checklist', []);

// Checklist

checklistModule.controller('ChecklistCtrl', ['$scope', function($scope) {
    var totalRegisteredItems = 0;
    var totalCompletedItems = 0;

    var checklistViewModel = {
        isListCompleted: false,
        buttonText: "Not Ready",
        childItemCount: 0,
        completedItems: 0
    };

    $scope.$on('checklist-register', function(args) {
        totalRegisteredItems++;

        checklistViewModel.childItemCount = totalRegisteredItems;
    });

    $scope.$on('checklistItem-change', function(event, args) {
        totalCompletedItems = args.value ? totalCompletedItems + 1 : totalCompletedItems - 1;

        var isListCompleted = (totalCompletedItems == totalRegisteredItems);
        checklistViewModel.completedItems = totalCompletedItems;
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

// ChecklistItem

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

checklistModule.controller('EstimateChecklistItemConfigCtrl', ['$scope', function($scope) {
    $scope.checklistItemConfigViewModel = {
        heading: "Estimate",
        content: "Required: Original estimate with print image.",
        actions: [
            {
                text: "Add Estimate",
                callback: function() {
                    console.log('Add estimate clicked');
                }
            },
            {
                text: "Write Estimate",
                callback: function() {
                    console.log('Write estimate clicked');
                }
            }
        ]
    };
}]);

checklistModule.controller('AttachmentChecklistItemConfigCtrl', ['$scope', function($scope) {
    $scope.checklistItemConfigViewModel = {
        heading: "Photos & Attachments",
        content: "Required: Minimum of 18 photos of the damage area.",
        actions: [
            {
                text: "Add Attachments",
                callback: function() {
                    console.log('Add Attachments clicked');
                }
            }
        ]
    };
}]);