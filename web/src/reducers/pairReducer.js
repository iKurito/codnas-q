import {
  START_GETTING_PAIRS_DETAILS,
  GET_PAIRS_DETAILS_SUCCESS,
  GET_PAIRS_DETAILS_ERROR,
} from '../types'

// Initial State
const initialState = {
  comparison: null,
  error: null,
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case START_GETTING_PAIRS_DETAILS:
      return {
        ...state,
        loading: action.payload,
      }
    case GET_PAIRS_DETAILS_SUCCESS:
      return {
        ...state,
        comparison: action.payload.res1,
        loading: false,
        error: null,
      }
    case GET_PAIRS_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
