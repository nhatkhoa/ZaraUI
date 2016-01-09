class UserFactory {

	_instance;
  
	constructor($http) {
		angular.extend(this, $http);

	}

	login(username, password) {
    const user = {
      username,
      password,
    };
    
    const promiseFunc = (resolve, reject) => {
      
    }
    
    return new Promise(promiseFunc)
	}
  
	static getInstance($http) {
		if (!this._instance)
			this._instance = new UserFactory($http);
		return this._instance;
	}
}

export default /*@ngInject*/ ($http) => new UserFactory($http);