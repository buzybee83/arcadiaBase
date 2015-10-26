'use strict';

angular.module('arcadiaBaseApp')
  .service('gameService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var that = this;

    that.findGameById = function(id) {
      var gameId = parseInt(id);
      return _.find(that.inventory, function(game) {
        return game._id === parseInt(gameId);
      });
    };
    that.inventory = [
    {
      _id: 1,
      category: 'Puzzle',
      name: 'Tetris',
      description: 'Strategically rotate, move, and drop a procession of Tetriminos that fall into the rectangular Matrix. Clear as many lines as possible by completing horizontal rows of blocks without empty space, but if the Tetriminos surpass the Skyline the game is over!',
      players: '1 - 2 players'
    }

  });
