'use strict';

angular.module('arcadiaBaseApp')
  .controller('SettingsCtrl', function ($scope, User, Auth, $http, $window, $location) {
    $scope.errors = {};

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
    };
    $scope.delete = function(user) {
      $scope.user = User;

        User.remove({id: user._id})
        .then( function() {
          $location.path = '/';
        });
		};
  });
