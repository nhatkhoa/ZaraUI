class RegisterController {
  /*@ngInject*/
  constructor($http, $state, $mdToast) {
    angular.extend(this,{
      name: 'register',
      $http,
      $state,
      $mdToast,
    })
  }
  
  register(){
    this.$http.post(`/api/register`, this.form)
    .then( response => {
      this.$state.go('login');
      this.$mdToast.showSimple('Đăng ký thành viên thành công! Vui lòng đăng nhập!')
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

export default RegisterController;
