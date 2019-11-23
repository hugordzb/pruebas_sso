import { Services } from "../../services";

export const ACTIONS = {
  SIGNIN_SUCCESS: "SIGNIN_SUCCESS",
  SIGNOUT_SUCCESS: "SIGNOUT_SUCCESS",
  INIT_LOAD: "INIT_LOAD",
  FINISH_LOAD: "FINISH_LOAD"
}

export const signIn = credential => {
  return dispatch => {
    dispatch(initLoad());
    new Services(credential).signIn((response => {
      let userData = response.data;
      localStorage.setItem('userData', JSON.stringify(userData));
      dispatch(signInSuccess(userData));
      dispatch(finishLoad("Inicio de sesión de manera correcta"));
    }), (responseError => {
      dispatch(finishLoad(responseError.error.message));
    }));
  }

};

const signInSuccess = userData => {
  return {
    type: ACTIONS.SIGNIN_SUCCESS,
    userData
  }
};

export const signOut = () => {
  return dispatch => {
    localStorage.clear();

    var userData = {
      userId: "",
      token: "",
      department: "",
      name: "",
      displayName: "",
      title: "",
      apps: []
    }
    dispatch(signOutSuccess(userData));
  }
}

const signOutSuccess = userData => {
  return {
    type: ACTIONS.SIGNOUT_SUCCESS,
    userData
  }
}

/************LOADER ACTIONS ***************/

const initLoad = () => {
  return {
    type: ACTIONS.INIT_LOAD
  }
}


const finishLoad = message => {
  return {
    type: ACTIONS.FINISH_LOAD,
    message
  }
}