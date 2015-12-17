const lessonFactory = /*@ngInject*/ ($http) => {

  const fetch = () => $http.get('/api/lessons');
  const getDetail = (id) => $http.get(`/api/lessons/${id}`);

  return {
    fetch,
    getDetail,
  }
}

export default lessonFactory;
