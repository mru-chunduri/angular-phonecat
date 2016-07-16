angular.module('phoneDetail')
  .component('phoneDetail', {
    templateUrl: '../templates/phone-detail.template.html',
    controller: ['$routeParams', 'Phone', function ($routeParams, Phone) {
      this.setImage = (imgUrl) => {
        this.selectedImage = imgUrl;
      };
      /*$http.get(`../phones/${$routeParams.phoneId}.json`).
        then( (response) => {
          this.phone = response.data;
          this.selectedImage = this.phone.images[0]
        });*/
      this.phone = Phone.get({phoneId: $routeParams.phoneId}, (phone) => {
        this.selectedImage = phone.images[0]
      });
    }]
  });
