import {
  LOGGED_IN_SUCCESSFULLY,
  LOGGED_IN_FAILURE,
  LOGGED_IN_ERROR,
  LOGGED_OUT_SUCCESSFULLY,
  LOGGED_OUT_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  error: {}
}

export default function loginReducer(state=initialState, action) {
  switch (action.type) {
    case LOGGED_IN_SUCCESSFULLY:
      return Object.assign({}, state, {
        isLoggedIn: true,
        token: action.payload.token
      })
    case LOGGED_IN_ERROR:
      // continue to next statement
    case LOGGED_IN_FAILURE:
      return Object.assign({}, state, {
        error: action.payload
      })
    case LOGGED_OUT_SUCCESSFULLY:
      return Object.assign({}, state, {
        isLoggedIn: false,
        token: null
      })
    default:
      return state
  }
}
