'use strict';

describe('Controller: GameDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('arcadiaBaseApp'));

  var GameDetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameDetailCtrl = $controller('GameDetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
