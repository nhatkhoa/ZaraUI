class NavbarController {
  constructor($mdSidenav) {
    this.name = 'navbar';
    angular.extends({
      $mdSidenav
    });
  }
  openLeftMenu() {
    this.$mdSidenav('left').toggle();
    console.log('dasdas');
  }

}

export default NavbarController;
