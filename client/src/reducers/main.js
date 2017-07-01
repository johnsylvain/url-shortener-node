import {
  GET_LINKS_REQUEST,
  GET_LINKS_SUCCESS,
  GET_LINKS_FAILURE,
} from '../actions/actionTypes';

const intialState = {
  isLoading: false,
  error: null,
  links: []
}

export default function mainReducer(state=initialState, action) {
  switch (action.type) {
    case GET_LINKS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case GET_LINKS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        links: action.payload
      });
    case GET_LINKS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      })
    default:
      return state;
  }
}
