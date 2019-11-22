import API from "../network/API";

export class Services {
  constructor(credential){
    this.credential = credential;
  }
    /**
    * signIn for the application
    * @param {function} callback function to execute on success
    * @param {function} callbackError function to execute on failure
    */
    signIn = (callback, callbackError = (error => {console.log(error);})) => {
      API.request(this.credential).post(`${global.config.current.SERVERS.SSO}/auth/login`, 
        (responseJson => {
          Promise.resolve({data: responseJson})
          .then(callback);
        }),
        (responseError => {
          Promise.resolve({error: responseError})
          .then(callbackError);
        })
      );
    }
}