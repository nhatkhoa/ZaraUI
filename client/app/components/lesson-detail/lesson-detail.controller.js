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
    this.ShareService.selectExercise(this.lessonId ,exercise);
  }

  getPokemonImage(){
    if(!this.lesson || !this.lesson.pokemon){
      return '/public/images/gif.gif';
    }
    return this.lesson.pokemon.thumbnailImage;
  }
  
  getPercent(pokemon){
    let percent = (pokemon.currentScore - pokemon.previousScore)/(pokemon.nextScore - pokemon.previousScore)*100;
    percent = parseInt((percent + 5 ) / 5) * 5;
    return percent;
  }
  
}

export default LessonDetailController;
