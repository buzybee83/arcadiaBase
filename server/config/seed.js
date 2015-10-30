/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var Game = require('../api/game/game.model');


Game.find().remove(function() {
  Game.create(
    {
      category: 'Puzzle',
      name: 'Tetris',
      description: 'Strategically rotate, move, and drop a procession of Tetriminos that fall into the rectangular Matrix. Clear as many lines as possible by completing horizontal rows of blocks without empty space, but if the Tetriminos surpass the Skyline the game is over!',
      players: '1 - 2 players'
    },
    function() {
      Game.find(function (err, games) {
        if (err) { console.log(err); }
        else {
          console.log('Finished populating ' + games.length + ' games.');
        }
      });
    }
  );
});
