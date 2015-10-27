'use strict';

angular.module('arcadiaBaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('gameTetris', {
        url: '/Tetris',
        templateUrl: 'app/gameTetris/gameTetris.html',
        controller: 'GameTetrisCtrl as tetrisCtrl'
      });
  });
