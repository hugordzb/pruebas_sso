import { combineReducers } from 'redux';
import { authentication } from './authentication';
import { loader } from './loader';

export const reducers = combineReducers({
  authentication,
  loader
});