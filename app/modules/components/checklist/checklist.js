var checklistModule = angular.module('checklist', []);



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

checklistModule.controller('ChecklistCtrl', ['$scope', function($scope) {
    var totalRegisteredItems = 0;
    var totalCompletedItems = 0;

    var checklistViewModel = {
        isListCompleted: false,
        completedButtonTitle: "I am disabled",
        buttonText: "Not Ready"
    };

    $scope.$on('checklist-register', function(args) {
        totalRegisteredItems++;
        console.log('Total Registered: ' + totalRegisteredItems);
    });

    $scope.$on('checklistItem-change', function(event, args) {
        totalCompletedItems = args.value ? totalCompletedItems + 1 : totalCompletedItems - 1;
        console.log('Total Completed: ' + totalCompletedItems);

        var isListCompleted = (totalCompletedItems == totalRegisteredItems);
        checklistViewModel.isListCompleted = (totalCompletedItems == totalRegisteredItems);
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

checklistModule.directive('checklistItem', function(){
    return {
        restrict: 'AE',
        templateUrl: 'modules/components/checklist/checklistItem.html'
    };
});