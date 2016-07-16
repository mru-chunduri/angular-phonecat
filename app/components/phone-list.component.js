angular.module('phoneList').component('phoneList', {
  templateUrl: '../templates/phone-list.template.html',
  controller: ['Phone', function (Phone) {
    this.phones = Phone.query();
  }]
});
