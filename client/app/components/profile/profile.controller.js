class ProfileController {
  /*@ngInject*/
  constructor($http, $mdToast) {
    angular.extend(this, {
      name: 'profileController',
      $http,
      $mdToast,
    });
    this.loadData();
  }
  
  loadData(){
    this.$http.get('/api/account')
    .then(response => {
      this.user = response.data;
      console.log(this.user);
    })
    .catch(er => {
      console.log(er);
      this.$mdToast.showSimple('Có vấn đề với tài khoản của bạn. Vui lòng đăng nhập lại!');
      window.location = '/#/login';
    })
  }
}

export default ProfileController;
