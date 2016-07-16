angular.module('core').
  filter('checkmark', () => {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
