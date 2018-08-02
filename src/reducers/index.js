import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import getMoviesReducer from './getMoviesReducer';

const auth = combineReducers({
  loginReducer,
  signupReducer
})
const home = combineReducers({
  getMoviesReducer
})
export default combineReducers({
  auth,
  home
})


