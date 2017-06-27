import {
  LOGGED_SUCCESSFULLY
} from '../actions/actionTypes';

const intialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  error: null
}

export default loginReducer(state=intialState, action) {
  switch (action.type) {
    case LOGGED_SUCCESSFULLY:
      return Object.assign({}, state, {
        isLoggedIn: true,
        token: action.payload.token,
        userId: action.payload.userId
      })
    default:
      return state
  }
}
