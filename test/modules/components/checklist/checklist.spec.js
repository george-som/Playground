describe("Checklist Suite", function () {

    describe("ChecklistCtrl Tests", function () {

        var _scope;
        var _sut;

        beforeEach(function() {
            module('checklist');

            inject(function($rootScope, $controller) {
                _scope = $rootScope.$new();
                _sut = $controller('ChecklistCtrl', { $scope: _scope });
            });
        });

        describe("When constructing ChecklistCtrl", function() {
            it("should set the viewModel on the scope", function () {
                expect(_scope.checklistViewModel).toBeDefined();
            }); 
        });

        describe("When checklist-register event is published", function() {
            it("should increase the number of child items correctly", function() {

                _scope.$broadcast('checklist-register');
                _scope.$broadcast('checklist-register');

                var viewModel = _scope.checklistViewModel;

                expect(viewModel.childItemCount).toBe(2);
            });
        });

        describe("When checklistItem-change event is published", function() {

            beforeEach(function() {
                _scope.$broadcast('checklist-register');
                _scope.$broadcast('checklist-register');
                _scope.$broadcast('checklist-register');
                _scope.$broadcast('checklist-register');

                _scope.$broadcast('checklistItem-change', { value: true });
                _scope.$broadcast('checklistItem-change', { value: true });
            });

            it("should set completed item count correctly", function () {

                var viewModel = _scope.checklistViewModel;

                var expectedCompletedItemCount = 2;
                var actualCompletedItemCount = viewModel.completedItems;

                expect(actualCompletedItemCount).toBe(expectedCompletedItemCount);
            });

            it("should set the list to completed when child count equals registered count", function() {

                _scope.$broadcast('checklistItem-change', { value: true });
                _scope.$broadcast('checklistItem-change', { value: true });

                var viewModel = _scope.checklistViewModel;

                expect(viewModel.childItemCount).toBe(viewModel.completedItems);
                expect(viewModel.isListCompleted).toBe(true);
            });

            it("should set the button text correctly when the list is completed", function() {

                _scope.$broadcast('checklistItem-change', { value: true });
                _scope.$broadcast('checklistItem-change', { value: true });

                var viewModel = _scope.checklistViewModel;

                expect(viewModel.buttonText).toBe("Done");
            });

            it("should set the button text correctly when the list is not completed", function() {

                var viewModel = _scope.checklistViewModel;

                expect(viewModel.buttonText).toBe("Not Ready");
            });

        });
    });
});