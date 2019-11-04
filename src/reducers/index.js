import { ACTIONS } from '../constants/actions';

export const authenticate = (state={}, action) => {
  switch (action.type) {
    case ACTIONS.AUTHENTICATE:
      return {
        ...state,
        user: {
          userId: action.payLoad.userId,
          isAuthenticate: (action.payLoad.Usuario && action.payLoad.Token) ? true : false,
          token: action.payLoad.token,
          apps: action.payLoad.apps
        }
      }
    default: 
      return state
  }

}