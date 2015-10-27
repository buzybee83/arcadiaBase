'use strict';

angular.module('arcadiaBaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('gameConnect4', {
        url: '/gameConnect4',
        templateUrl: 'app/gameConnect4/gameConnect4.html',
        controller: 'GameConnect4Ctrl'
      });
  });