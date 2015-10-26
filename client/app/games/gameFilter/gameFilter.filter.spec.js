'use strict';

describe('Filter: gameFilter', function () {

  // load the filter's module
  beforeEach(module('arcadiaBaseApp'));

  // initialize a new instance of the filter before each test
  var gameFilter;
  beforeEach(inject(function ($filter) {
    gameFilter = $filter('gameFilter');
  }));

  it('should return the input prefixed with "gameFilter filter:"', function () {
    var text = 'angularjs';
    expect(gameFilter(text)).toBe('gameFilter filter: ' + text);
  });

});
