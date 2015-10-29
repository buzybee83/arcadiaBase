'use strict';

angular.module('arcadiaBaseApp')
  .controller('SettingsCtrl', function ($scope, User, Auth, $window, $location) {
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
      var user = Auth.getCurrentUser()._id;
      if(user) {
        User.remove({id: user})
        .then( function() {
          $location.path = '/';
        });
      }
		};
  });
