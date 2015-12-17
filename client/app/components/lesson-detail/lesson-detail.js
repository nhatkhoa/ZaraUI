import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lessonDetailComponent from './lesson-detail.component';

let lessonDetailModule = angular.module('lessonDetail', [
  uiRouter
])
.directive('lessonDetail', lessonDetailComponent)
.config(/*@ngInject*/($stateProvider) => {
  $stateProvider
  .state('lesson',{
    url: '/lesson/:id',
    template: '<lesson-detail></lesson-detail>',
  });
});

export default lessonDetailModule;
