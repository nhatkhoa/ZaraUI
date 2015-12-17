class ShareService {
  /*@ngInject*/
  constructor($state) {
    angular.extend(this, {
      selectedLesson: {},
      lessons: [],
      selectedExercise: {},
      $state,
    });
  }

  selectLesson(lesson) {
    console.log(`select lesson ${lesson.title}`);
    this.selectedLesson = lesson;
    this.$state.go('lesson', {
      id: lesson.id
    });
  }

  selectExercise(exercise) {
    console.log(`select exercise ${JSON.stringify(exercise)}`);

    this.selectedExercise = exercise;
    this.$state.go('exercise', {
      exercise: exercise.id,
    });
  }

  getSelectedLesson(){
    return this.selectedLesson;
  }
}

export default ShareService;
