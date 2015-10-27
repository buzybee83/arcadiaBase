'use strict';

describe('Controller: GameConnect4Ctrl', function () {

  // load the controller's module
  beforeEach(module('arcadiaBaseApp'));

  var GameConnect4Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameConnect4Ctrl = $controller('GameConnect4Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
