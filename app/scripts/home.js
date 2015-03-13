angular.module('sample.home', [])

.controller('HomeCtrl', function($scope, User) {
  this.userService = new User(serverErrorHandler);
  this.userService.all().$promise.then(function(result) {
    return $scope.users = result.users;
  });

  var serverErrorHandler = function() {
    return console.log("There was a server error.");
  };
});

