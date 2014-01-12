'use strict';

describe("Checklist Suite", function() {

    beforeEach(module('checklist'));

    describe("Controllers Tests", function(){

        var _scope;
        var _sut;

        var initializer = function($rootScope, $controller) {
            _scope = $rootScope.$new();
            _sut = $controller('ChecklistItemCtrl', { $scope: _scope });
        };

        beforeEach(inject(initializer));

        describe("ChecklistItemCtrl Tests", function() {

            describe("When ChecklistItemCtrl is constructed", function() {

                it("should emit checklist-register event', function", function() {
                    spyOn(_scope, '$emit');

                    inject(function($controller) {
                        _sut = $controller('ChecklistItemCtrl', { $scope: _scope });
                    });

                    expect(_scope.$emit)
                        .toHaveBeenCalledWith('checklist-register');
                });
            });

            describe("When notifyChange is called on ViewModel", function() {

                it("should emit checklistItem-change event", function() {
                    spyOn(_scope, '$emit');

                    var expectedChangeArgs = {
                        value : true
                    };

                    _scope.checklistItemViewModel.checkboxValue = expectedChangeArgs.value;
                    _scope
                        .checklistItemViewModel
                        .notifyChange();

                    expect(_scope.$emit)
                        .toHaveBeenCalledWith('checklistItem-change', expectedChangeArgs);
                });
            });
        });
    });
});