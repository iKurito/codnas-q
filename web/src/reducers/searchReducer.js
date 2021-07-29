import {
  START_GETTING_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_ERROR,
} from '../types'

// Initial State
const initialState = {
  searchResults: [],
  error: null,
  loading: true,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case START_GETTING_SEARCH_RESULTS:
      return {
        ...state,
        loading: action.payload,
      }
    case GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        loading: false,
        error: null,
      }
    case GET_SEARCH_RESULTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
