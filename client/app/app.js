import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';

angular.module('app', [
  uiRouter,
  Common.name,
  Components.name,
  ngMaterial
])

.directive('app', AppComponent);
