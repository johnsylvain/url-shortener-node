import {
  GET_LINKS_REQUEST,
  GET_LINKS_SUCCESS,
  GET_LINKS_FAILURE,
  ADD_LINK_SUCCESS,
  ADD_LINK_FAILURE,
  DELETE_LINK_SUCCESS,
  DELETE_LINK_FAILURE,
  UPDATE_LINK_SUCCESS,
  UPDATE_LINK_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  links: []
}

export default function mainReducer(state=initialState, action) {
  switch (action.type) {
    case GET_LINKS_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case GET_LINKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        links: action.payload
      }

    case GET_LINKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    case ADD_LINK_SUCCESS:
      return {
        ...state,
        links: [
          ...state.links,
          action.payload
        ]
      }

    case DELETE_LINK_SUCCESS:
      return {
        ...state,
        links: state.links
          .filter(l => 
            action.payload !== l._id
          )
      }

    case UPDATE_LINK_FAILURE:
    case ADD_LINK_FAILURE:
    case DELETE_LINK_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case UPDATE_LINK_SUCCESS:
      return {
        ...state,
        links: state.links
          .map(l =>
            l._id === action.payload._id
            ? action.payload
            : l
          )
      }

    default:
      return state
  }
}
