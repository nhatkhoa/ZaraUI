import template from './register.html';
import controller from './register.controller';
import './register.styl';

let registerComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'register',
    bindToController: true
  };
};

export default registerComponent;
