class LessonListController {
  /*@ngInject*/
  constructor(LessonFactory, ShareService) {
    this.name = 'lessonList';

    angular.extend(this, {
      LessonFactory,
      ShareService,
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
      return 3;
    }
    return 3;
  }

  getImage(lesson) {
    if (lesson.pokemonLevel === 0) {
      return 'public/images/ball.png';
    }
    return lesson.pokemonImg;
  }

  selectLesson(lesson) {
    this.ShareService.selectLesson(lesson);
  }
}

export default LessonListController;
