import template from './do-exercise.html';
import controller from './do-exercise.controller';
import './do-exercise.styl';

let doExerciseComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'doExercise',
    bindToController: true
  };
};

export default doExerciseComponent;
