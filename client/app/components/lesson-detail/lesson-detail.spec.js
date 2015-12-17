import LessonDetailModule from './lesson-detail'
import LessonDetailController from './lesson-detail.controller';
import LessonDetailComponent from './lesson-detail.component';
import LessonDetailTemplate from './lesson-detail.html';

describe('LessonDetail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LessonDetailModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LessonDetailController();
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
      expect(LessonDetailTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LessonDetailComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(LessonDetailTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LessonDetailController);
      });
  });
});
