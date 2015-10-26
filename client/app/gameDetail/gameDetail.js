'use strict';

angular.module('arcadiaBaseApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('gameDetail', {
    url: '/games/:gameId',
    templateUrl: 'app/gameDetail/gameDetail.html',
    controller: 'GameDetailCtrl as ctrl',
    onEnter: function() {
      console.log('Entering gameDetail');
    },
    onExit: function() {
      console.log('Leaving gameDetail');
    }
  });
});
