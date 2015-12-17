import DoExerciseModule from './do-exercise'
import DoExerciseController from './do-exercise.controller';
import DoExerciseComponent from './do-exercise.component';
import DoExerciseTemplate from './do-exercise.html';

describe('DoExercise', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DoExerciseModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DoExerciseController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(DoExerciseTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DoExerciseComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(DoExerciseTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DoExerciseController);
      });
  });
});
