class LessonListController {
  /*@ngInject*/
  constructor(LessonFactory, ShareService, $state) {
    this.name = 'lessonList';

    angular.extend(this, {
      LessonFactory,
      ShareService,
      $state,
    });

    this.loadData();
  }

  loadData() {
    this.LessonFactory
      .fetch()
      .then(response => {
        this.lessons = response.data;
        console.log(response.data);
      })
      .catch(er => console.log(er));
  }

  getCol(lesson) {
    if (lesson.pokemonLevel === 0) {
      return 4;
    }
    return 4;
  }

  getImage(lesson) {
    if (!lesson.pokemon) {
      return 'public/images/ball.png';
    }
    return lesson.pokemon.thumbnailImage;
  }

  selectLesson(lessonId) {
    this.$state.go('lesson', {id: lessonId});
  }
}

export default LessonListController;
