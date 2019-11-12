const ACTIONS = {
  AUTHENTICATE: "AUTHENTICATE",
  REFRESH: "REFRESH",
  SIGNOUT: "SIGNOUT"
}

export const authenticate = userData => {
  localStorage.setItem("userId", userData.userId);
  localStorage.setItem("displayName", JSON.stringify(userData.displayName));
  localStorage.setItem("token", userData.token);
  localStorage.setItem("apps", JSON.stringify(userData.apps));

  return {
    type: ACTIONS.AUTHENTICATE,
    userData
  }
};

export const refresh = () => {
  var userData = {
    userId: localStorage.getItem("userId"),
    displayName: localStorage.getItem("displayName"),
    token: localStorage.getItem("token"),
    apps: JSON.parse(localStorage.getItem("apps"))
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
    displayName: "",
    token: "",
    apps: []
  }

  return {
    type: ACTIONS.SIGNOUT,
    userData
  }
}