const lessonFactory = /*@ngInject*/ ($http) => {

  const fetch = () => $http.get('/api/lessons');
  const getDetail = (id) => $http.get(`/api/lessons/${id}`);
  const getQuestions = (exerciseId) => $http.get(`api/do-exercise/${exerciseId}`);

  return {
    fetch,
    getDetail,
    getQuestions,
  };
};

export default lessonFactory;
