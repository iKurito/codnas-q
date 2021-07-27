import {
  START_GETTING_CLUSTER_INFORMATION,
  GET_CLUSTER_INFORMATION_SUCCESS,
  GET_CLUSTER_INFORMATION_ERROR,
} from '../types'

// Initial State
const initialState = {
  information: null,
  error: null,
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case START_GETTING_CLUSTER_INFORMATION:
      return {
        ...state,
        loading: action.payload,
      }
    case GET_CLUSTER_INFORMATION_SUCCESS:
      return {
        ...state,
        information: action.payload,
        loading: false,
        error: null,
      }
    case GET_CLUSTER_INFORMATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
