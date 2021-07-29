import {
  START_GETTING_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_ERROR,
  START_CLEANING_SEARCH_RESULTS,
  CLEAN_SEARCH_RESULTS_SUCCESS,
  CLEAN_SEARCH_RESULTS_ERROR,
} from '../types'

// Initial State
const initialState = {
  searchResults: [],
  error: null,
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case START_GETTING_SEARCH_RESULTS:
    case START_CLEANING_SEARCH_RESULTS:
      return {
        ...state,
        loading: action.payload,
      }
    case GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        error: null,
        loading: false,
      }
    case GET_SEARCH_RESULTS_ERROR:
    case CLEAN_SEARCH_RESULTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case CLEAN_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        searchResults: [],
        error: null,
        loading: false,
      }
    default:
      return state
  }
}
