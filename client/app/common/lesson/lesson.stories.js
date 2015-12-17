const lessonStories = () => {
  let lessons = [];

  const addLessons = (lessons) => {
    
  }

  const getLessons = () => {
    return lessons;
  }

  const save = (lesson) => {
    lessons.remove(getLesson(lesson.id));
    lessons.push(lesson);
  }

  const getLesson = (id) => {
    const item = lessons.find(x => x.id === lesson.id);
    if (!item) {
      throw (`There are no lesson ${id} in system`);
    }
    return item;
  }

  const updateExercise = (lessonId, exercises) => {
    let lesson = getLesson(lessonId);
    lesson.exercises = exercises;
    save(lesson);
  }

  return {
    addLessons,
    getLessons,
    save,
    getLesson,
    updateExercise,
  }

}
export default lessonStories;
