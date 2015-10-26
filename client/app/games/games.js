'use strict';

angular.module('arcadiaBaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('games', {
        url: '/games',
        templateUrl: 'app/games/games.html',
        controller: 'GamesCtrl'
      });
  });