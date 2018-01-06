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
  error: null
}

export default function loginReducer(state=initialState, action) {
  switch (action.type) {
    case LOGGED_IN_SUCCESSFULLY:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload
      }
    
    case LOGGED_IN_ERROR:
    case LOGGED_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case LOGGED_OUT_SUCCESSFULLY:
      return {
        ...state,
        isLoggedIn:false,
        token: null
      }

    default:
      return state
  }
}
