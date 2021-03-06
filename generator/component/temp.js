import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= name %>Component from './<%= paramCase %>.component';

let <%= name %>Module = angular.module('<%= name %>', [
  uiRouter
])

.directive('<%= name %>', <%= name %>Component);

export default <%= name %>Module;
