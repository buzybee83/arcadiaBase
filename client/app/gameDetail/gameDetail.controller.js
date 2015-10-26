'use strict';

angular.module('arcadiaBaseApp')
  .controller('GameDetailCtrl', function($stateParams, gameService) {
    var that = this;
    var id = $stateParams.gameId;

    gameService.findGameById(id).then(function(json) {
      that.game = json.data;
    });
  });
