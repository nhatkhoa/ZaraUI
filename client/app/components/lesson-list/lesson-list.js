import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lessonListComponent from './lesson-list.component';

let lessonListModule = angular.module('lessonList', [
  uiRouter,
])

.directive('lessonList', lessonListComponent);

export default lessonListModule;
