const userIntercepter = /*@ngInject*/ ($q) => {
  const promise = $q.defer();
	const responseError = (rejection) => {
		if (rejection.status === 403 || rejection.status === 401) {
			window.location = '/#/login';
		}
    promise.reject(rejection);
	}
	return {
		responseError,
	}
}


export default userIntercepter;