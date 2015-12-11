import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';
import ngMaterial from 'angular-material';

let navbarModule = angular.module('navbar', [
  uiRouter,
  ngMaterial
])

.directive('navbar', navbarComponent);

export default navbarModule;
