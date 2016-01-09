import angular from 'angular';
import UserFactory from './user.factory';
import UserIntercepter from './user.interceptor';

let userModule = angular.module('user', [])

.factory('User', UserFactory)
.factory('UserIntercepter', UserIntercepter)
.config(/*@ngInject*/($httpProvider) => {
   $httpProvider.interceptors.push('UserIntercepter');
});
export default userModule;
