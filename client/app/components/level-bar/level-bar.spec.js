import LevelBarModule from './level-bar'
import LevelBarController from './level-bar.controller';
import LevelBarComponent from './level-bar.component';
import LevelBarTemplate from './level-bar.html';

describe('LevelBar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LevelBarModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LevelBarController();
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
      expect(LevelBarTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LevelBarComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(LevelBarTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LevelBarController);
      });
  });
});
