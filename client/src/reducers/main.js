import {
  GET_LINKS_REQUEST,
  GET_LINKS_SUCCESS,
  GET_LINKS_FAILURE,
  ADD_LINK_SUCCESS,
  ADD_LINK_FAILURE,
  DELETE_LINK_SUCCESS,
  DELETE_LINK_FAILURE,
} from '../actions/actionTypes';

const initialState = {
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
      });
    case ADD_LINK_SUCCESS:
      return Object.assign({}, state, {
        links: [...state.links, action.payload]
      })
    case ADD_LINK_FAILURE:
      return Object.assign({}, state, {
        error: action.payload
      })
    case DELETE_LINK_SUCCESS:
      return Object.assign({}, state, {
        links: state.links.filter(link => action.payload !== link._id)
      });
    case DELETE_LINK_FAILURE:
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
}
