class LessonDetailController {
  /*@ngInject*/
  constructor(LessonFactory, $stateParams, ShareService) {
    this.name = 'lessonDetail';
    angular.extend(this, {
      LessonFactory,
      $stateParams,
      ShareService,
    });

    this.loadData($stateParams.exercise);
  }

  loadData() {
    this.lesson = this.ShareService.getSelectedLesson() || {};
    this.lessonId = this.$stateParams.id;
    this.LessonFactory
      .getDetail(this.lessonId)
      .then(response => {
        angular.extend(this.lesson, response.data);
        console.log(this.lesson);
      })
      .catch(er => console.log(er));
  }

  selectExercise(exercise) {
    this.ShareService.selectExercise(exercise);
  }

  getPokemonImage(){
    if(!this.lesson || this.lesson.pokemonLevel === 0){
      return '/public/images/ball.png';
    }

    return this.lesson.pokemonImg;
  }
}

export default LessonDetailController;
