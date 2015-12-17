import angular from 'angular';
import ShareService from './share.service';

let shareModule = angular.module('share', [])

.service('ShareService', ShareService);

export default shareModule;
