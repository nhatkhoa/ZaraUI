import template from './level-bar.html';
import controller from './level-bar.controller';
import './level-bar.scss';

let levelBarComponent = function () {
  return {
    restrict: 'E',
    scope: {
      pokemon: '=',
    },
    template,
    controller,
    controllerAs: 'levelBar',
    bindToController: true
  };
};

export default levelBarComponent;
