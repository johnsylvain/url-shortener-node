import { combineReducers } from 'redux';

import loginReducer from './login';
import mainReducer from './main';

const rootReducer = combineReducers({
  login: loginReducer,
  main: mainReducer
});

export default rootReducer;
