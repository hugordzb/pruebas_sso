export const ACTIONS = {
  AUTHENTICATE_SUCCESS: "AUTHENTICATE_SUCCESS",
  REFRESH_SUCCESS: "REFRESH_SUCCESS",
  SIGNOUT_SUCCESS: "SIGNOUT_SUCCESS"
}

export const authenticate = userData => {
  localStorage.setItem('userData', JSON.stringify(userData))

  return {
    type: ACTIONS.AUTHENTICATE,
    userData
  }
};

const authenticateSuccess = userData => {
  return {
    type: ACTIONS.AUTHENTICATE_SUCCESS,
    userData
  }
};

export const refresh = () => {
  let userData = {};
  let userJson = localStorage.getItem("userData");
  if (userJson) {
    userData = JSON.parse(userJson);

  }
  return {
    type: ACTIONS.REFRESH,
    userData
  }
}

export const signOut = () => {
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

  return {
    type: ACTIONS.SIGNOUT,
    userData
  }
}