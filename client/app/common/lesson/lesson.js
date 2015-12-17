import angular from 'angular';
import LessonFactory from './lesson.factory';

let lessonModule = angular.module('lesson', [])

.factory('LessonFactory', LessonFactory);

export default lessonModule;
