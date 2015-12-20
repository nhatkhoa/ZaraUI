import angular from 'angular';
import uiRouter from 'angular-ui-router';
import doExerciseComponent from './do-exercise.component';

let doExerciseModule = angular.module('doExercise', [
  uiRouter
])

.directive('doExercise', doExerciseComponent)
  .config( /*@ngInject*/ ($stateProvider) => {
    $stateProvider
      .state('exercise', {
        url: '/exercises/:lesson/:exercise/start',
        template: '<do-exercise></do-exercise>'
      });
  });

export default doExerciseModule;
