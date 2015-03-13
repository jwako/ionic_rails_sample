angular.module('sample').factory('User', ['$resource', 'ENV', function($resource, ENV) {
    var User;
    return User = (function() {
      function User(errorHandler) {
        this.service = $resource(ENV.apiEndpoint + '/users.json', {}, {
          'query': {
            method: 'GET'
          }
        });
        this.errorHandler = errorHandler;
      }

      User.prototype.all = function() {
        return this.service.query((function() {
          return null;
        }), this.errorHandler);
      };

      return User;

    })();
  }
]);

