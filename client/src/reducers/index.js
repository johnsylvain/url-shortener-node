import {
  GET_MESSAGE
} from '../actions/actionTypes';

const initialState = {
  title: ''
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case GET_MESSAGE:
      return Object.assign({}, state, {
        title: action.payload
      })
    default:
      return state;
  }
}
