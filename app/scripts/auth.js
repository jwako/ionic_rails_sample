angular.module('sample.auth', [])

.controller('AuthCtrl', function($scope, $ionicModal, $timeout, $state, $auth) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    $auth.submitLogin($scope.loginData)
      .then(function(resp) { 
        $scope.closeLogin();
        $state.go('app.home');
      })
      .catch(function(resp) { 
        console.log(resp);
      });
  };
});


