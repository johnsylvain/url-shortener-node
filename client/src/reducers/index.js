import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import loginReducer from './login';
import mainReducer from './main';

const rootReducer = combineReducers({
  login: loginReducer,
  main: mainReducer,
  router: routerReducer
});

export default rootReducer;
