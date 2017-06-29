import {
  LOGGED_SUCCESSFULLY,
  LOGGED_FAILURE
} from '../actions/actionTypes';

const intialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  error: null
}

export default function loginReducer(state=intialState, action) {
  switch (action.type) {
    case LOGGED_SUCCESSFULLY:
      return Object.assign({}, state, {
        isLoggedIn: true,
        token: action.payload.token,
        userId: action.payload.userId
      })
    case LOGGED_FAILURE:
      return Object.assign({}, state, {
        error: action.payload
      })
    default:
      return state
  }
}
