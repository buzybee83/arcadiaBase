'use strict';

angular.module('arcadiaBaseApp')
  .controller('GamesCtrl', function ($state, gameService) {

    var that = this;

    that.searchText = '';

    that.getInventory = function() {
      gameService.getGames().then(function(json) {
        that.inventory = json.data;
      });
    };

    that.getInventory();

    this.goGame = function (game) {
      // $state.go( 'gameDetail', { gameName : game. } );
      $state.go('game' + game.name);
    };
  });
