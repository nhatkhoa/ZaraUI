class AppController{
    /*@ngInject*/
  constructor() {
    this.name = 'app';
    console.log('Init controller of App')
  }

  selectLesson(lesson){
    this.lesson = lesson;
    console.log(`select lesson ${lesson.name}`);
  }
}

export default AppController;