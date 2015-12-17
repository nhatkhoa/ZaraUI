import template from './lesson-list.html';
import controller from './lesson-list.controller';
import './lesson-list.styl';

let lessonListComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'lessonList',
    bindToController: true
  };
};

export default lessonListComponent;
