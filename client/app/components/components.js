import angular from 'angular';
import LessonList from './lesson-list/lesson-list';
import Home from './home/home';
import Lesson from './lesson-detail/lesson-detail';
import Exercise from './do-exercise/do-exercise';


let componentModule = angular.module('app.components', [
  LessonList.name,
  Home.name,
  Lesson.name,
  Exercise.name,
]);

export default componentModule;
