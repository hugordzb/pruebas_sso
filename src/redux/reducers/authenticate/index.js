const ACTIONS = {
  AUTHENTICATE: "AUTHENTICATE",
  REFRESH: "REFRESH",
  SIGNOUT: "SIGNOUT"
}

const apiInitState = () => {
  let userData = {};
  let userJson = localStorage.getItem("userData");

  if(userJson){
    userData = {
      user: JSON.parse(userJson),
      isAuthenticated: true
    }
  }
  
  return userData;
}

export const authenticate = (state = apiInitState(), action) => {
  switch (action.type) {
    case ACTIONS.AUTHENTICATE:
      return {
        ...state,
        user: {
          userId: action.userData.userId,
          displayName: action.userData.displayName,
          title: action.userData.title,
          department: action.userData.department,
          isAuthenticated: (action.userData.userId && action.userData.token) ? true : false,
          token: action.userData.token,
          apps: action.userData.apps
        }
      }
    case ACTIONS.REFRESH:
      return {
        ...state,
        user: {
          userId: action.userData.userId,
          displayName: action.userData.displayName,
          title: action.userData.title,
          department: action.userData.department,
          isAuthenticated: (action.userData.userId && action.userData.token) ? true : false,
          token: action.userData.token,
          apps: action.userData.apps
        }
      }
    case ACTIONS.SIGNOUT:
      return {
        ...state,
        user: {
          userId: action.userData.userId,
          displayName: action.userData.displayName,
          title: action.userData.title,
          department: action.userData.department,
          isAuthenticated: (action.userData.userId && action.userData.token) ? true : false,
          token: action.userData.token,
          apps: action.userData.apps
        }
      }
    default:
      return state
  }

}