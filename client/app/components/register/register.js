import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registerComponent from './register.component';

let registerModule = angular.module('register', [
        uiRouter
    ])
    .config(/*@ngInject*/($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('register', {
                url: '/register',
                template: '<register></register>',
            });
    })
    .directive('register', registerComponent);

export default registerModule;
