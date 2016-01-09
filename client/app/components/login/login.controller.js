class LoginController {
  /*@ngInject*/
  constructor($http, $mdToast, $state) {
    angular.extend(this,{
      name: 'login',
      $http,
      $mdToast,
      $state,
    });
  }
  
  login(){
    
    this.$http.post(`/api/login?username=${this.username}&password=${this.password}`)
    .then( response => {
      this.token = response.data.token;
      this.$http.defaults.headers.common['x-auth-token'] = String(this.token);
      this.$http.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
      console.log(this.$http.defaults.headers.common);
      this.$http.get('/api/account')
      .then((response) => {
        this.$state.go('home');
        this.$mdToast.showSimple(`Đăng nhập thành công! Chào mừng ${response.data.username} trở lại!`);
      })
      .catch(() => {
        this.$state.go('login');
        this.$mdToast.showSimple(`Bạn cần hoàn thành bước đăng nhập!`);
      });
    })
    .catch((err) => {
      this.$mdToast.showSimple(`Tên đăng nhập hoặc mật khẩu sai!`);
    })
  }
}

export default LoginController;
