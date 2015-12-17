import template from './<%= paramCase %>.html';
import controller from './<%= paramCase %>.controller';
import './<%= paramCase %>.styl';

let <%= name %>Component = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: '<%= name %>',
    bindToController: true
  };
};

export default <%= name %>Component;
