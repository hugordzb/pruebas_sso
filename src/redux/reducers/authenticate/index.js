const ACTIONS = {
  AUTHENTICATE: "AUTHENTICATE",
  REFRESH: "REFRESH",
  SIGNOUT: "SIGNOUT"
}

const initialState = {
  user: {
    userId: '',
    displayName:'',
    isAuthenticated: false,
    token: '',
    apps: [],
  }
}

export const authenticate = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AUTHENTICATE:
      return {
        ...state,
        user: {
          userId: action.userData.userId,
          displayName: action.userData.displayName,
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
          isAuthenticated: (action.userData.userId && action.userData.token) ? true : false,
          token: action.userData.token,
          apps: action.userData.apps
        }
      }
    default:
      return state
  }

}