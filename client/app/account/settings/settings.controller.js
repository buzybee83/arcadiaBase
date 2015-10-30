'use strict';

angular.module('arcadiaBaseApp')
  .controller('SettingsCtrl', function ($scope, User, Auth, $http, $window, $state, $cookieStore) {
    $scope.pageClass = 'page-account';

    $scope.errors = {};

    $scope.currentUser = Auth.getCurrentUser();

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
       if(user) {
        User.remove({id: user._id});
        $state.go('main');
        $scope.broadcast(Auth.isValidated());
      }
    };
  });
