import angular from 'angular';
import LessonList from './lesson-list/lesson-list';
import Home from './home/home';
import Lesson from './lesson-detail/lesson-detail';
import Exercise from './do-exercise/do-exercise';
import Profile from './profile/profile';
import LevelBar from './level-bar/level-bar';
import Register from './register/register';
import Login from './login/login';


let componentModule = angular.module('app.components', [
  LessonList.name,
  Home.name,
  Lesson.name,
  Exercise.name,
  Profile.name,
  LevelBar.name,
  Register.name,
  Login.name,
]);

export default componentModule;
