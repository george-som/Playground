describe("Modal Suite", function () {

    beforeEach(module('modal'));

    describe("Modal Tests", function() {

        describe("ModalCtrl Tests", function () {

            var _scope;
            var _sut;

            beforeEach(inject(function($rootScope, $controller) {
                _scope = $rootScope.$new();
                _sut = $controller('ModalCtrl', { $scope: _scope });
            }));

            describe("When constructing ModalCtrl", function() {
                it("should set the viewModel on the scope", function () {
                    expect(_scope.modalViewModel).toBeDefined();
                });
            });

            describe("When show-modal event is published", function() {

                it("should set the content url on the scope", function() {

                    var expectedContentUrl = "any-url.html";

                    var args = { contentUrl: expectedContentUrl };

                    _scope.$broadcast("show-modal", args);

                    var viewModel = _scope.modalViewModel;

                    expect(viewModel.contentUrl).toBe(expectedContentUrl);
                });

                it("should set modalShown to true", function() {

                    var expectedContentUrl = "any-url.html";

                    var args = { contentUrl: expectedContentUrl };

                    _scope.$broadcast("show-modal", args);

                    var viewModel = _scope.modalViewModel;

                    expect(viewModel.modalShown).toBeTruthy();
                })
            });

            describe("When hide-modal event is published", function() {
                it("should set modalShown to false", function() {

                    _scope.$broadcast("hide-modal");

                    var viewModel = _scope.modalViewModel;

                    expect(viewModel.modalShown).toBeFalsy();
                })
            });
        });
    });
});