import { ACTIONS } from '../constants/actions';

export const authenticate = (state={}, action) => {
  switch (action.type) {
    case ACTIONS.AUTHENTICATE:
      return {
        ...state,
        user: {
          userId: action.payLoad.Usuario,
          token: action.payLoad.Token,
          apps: action.payLoad.Apps
        }
      }
    default: 
      return state
  }

}