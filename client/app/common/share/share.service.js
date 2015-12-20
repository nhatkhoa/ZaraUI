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

  selectExercise(lessonId, exercise) {
    this.selectedExercise = exercise;
    this.$state.go('exercise', {
      lesson: lessonId,
      exercise: exercise.id,
    });
  }

  getSelectedLesson(){
    return this.selectedLesson;
  }
}

export default ShareService;
