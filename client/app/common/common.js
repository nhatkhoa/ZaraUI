import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import Lesson from './lesson/lesson';
import Share from './share/share';

let commonModule = angular.module('app.common', [
  Navbar.name,
  User.name,
  Lesson.name,
  Share.name,
]);

export default commonModule;
