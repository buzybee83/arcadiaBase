'use strict';

angular.module('arcadiaBaseApp')
  .service('gameService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var that = this;

    that.findGameById = function(id) {
      return $http.get('/api/games/' + id);
    };

    that.getGames = function() {
      return $http.get('/api/games');
    };
  });
