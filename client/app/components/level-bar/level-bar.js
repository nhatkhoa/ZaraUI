import angular from 'angular';
import uiRouter from 'angular-ui-router';
import levelBarComponent from './level-bar.component';

let levelBarModule = angular.module('levelBar', [
  uiRouter
])

.directive('levelBar', levelBarComponent);

export default levelBarModule;
