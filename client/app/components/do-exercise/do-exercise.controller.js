class DoExerciseController {
  /*@ngInject*/
  constructor(LessonFactory, $stateParams, $mdToast, $http, $state) {
    angular.extend(this, {
      name: 'doExercise',
      LessonFactory,
      results: [],
      $stateParams,
      $mdToast,
      $http,
      $state,
    });
    this.loadData($stateParams.exercise);
  }

  loadData(exerciseId) {
    this.LessonFactory
      .getQuestions(exerciseId)
      .then(response => {
        this.questions = response.data;
        console.log(response.data);
        this.total = 0;
      })
      .catch(er => console.log(er));
  }

  next() {
    if (this.selectedIndex != this.questions.length) {
      this.selectedIndex += 1;
    }
  }

  checkSingleQuestion(question) {
    console.log(question);
    if (question.selected == undefined) {
      this.$mdToast
        .showSimple(`Bạn phải chọn một đáp án!`);
      return;
    }

    if (question.selected == question.answers[0]) {
      this.results[question.id] = 10;
      question.result = true;
      this.total += 10;
      this.$mdToast
        .showSimple(`Chính xác! Cộng thêm 10 điểm nữa!`);
      this.next();
    } else {
      question.result = false;
      this.results[question.id] = 0;
      this.$mdToast
        .showSimple(`Sai rồi! Bạn không được điểm đâu!`);
    }

  }

  isAnswer(question, index) {
    console.log(index + ' ' + question.answer[0]);
    if (this.results[question.id] == undefined) {
      return false;
    }

    if (question.answers[0] == index) {
      return true;
    }

    return false;
  }

  getQuestionStatus(question) {
    const result = this.results[question.id];
    if (!result) {
      return -1;
    }

    if (result == 0) {
      return 0;
    } else {
      return 1;
    }
  }

  submit() {
    console.log('Submit');

    const lesson = this.$stateParams.lesson;
    const exercise = this.$stateParams.exercise;

    this.$http.post(`/api/do-exercise/${lesson}/${exercise}`, this.total)
    .then(response => {
      this.$mdToast
        .showSimple(`Tổng số điểm là ${this.total}`);
      this.$state.go('lesson',{id: lesson});
    })
    .catch(er => {
      console.log(er);
    });
  }
}

export default DoExerciseController;
