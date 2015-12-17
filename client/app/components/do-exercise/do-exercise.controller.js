class DoExerciseController {
  /*@ngInject*/
  constructor(LessonFactory) {
    angular.extend(this, {
      name: 'doExercise',
      LessonFactory,
    });

    this.loadData();
  }

  loadData(){
    this.LessonFactory
    .getQuestions(exerciseId)
    .then(response => {
      this.questions = response.data;
      console.log(response.data);
    })
    .catch(er => console.log(er));
  }
}

export default DoExerciseController;
