import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';

let loginModule = angular.module('login', [
		uiRouter
	])
	.config( /*@ngInject*/ ($stateProvider, $urlRouterProvider) => {
		$stateProvider
			.state('login', {
				url: '/login',
				template: '<login></login>',
			});
	})
	.directive('login', loginComponent);

export default loginModule;