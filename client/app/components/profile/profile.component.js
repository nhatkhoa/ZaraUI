import template from './profile.html';
import controller from './profile.controller';
import './profile.styl';

let profileComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'profile',
    bindToController: true
  };
};

export default profileComponent;
