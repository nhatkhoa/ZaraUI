import template from './lesson-detail.html';
import controller from './lesson-detail.controller';
import './lesson-detail.styl';

let lessonDetailComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'lessonDetail',
    bindToController: true
  };
};

export default lessonDetailComponent;
