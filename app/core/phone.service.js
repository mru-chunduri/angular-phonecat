angular.module('core.phone').
  factory('Phone', ['$resource',
    ($resource) => {
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'}, // this is to set default path to be phones.json, not to be confused by the :phoneId
          isArray: true
        }
      });
    }
  ]);
