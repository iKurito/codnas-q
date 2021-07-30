import {
  START_GETTING_CLUSTER_DETAILS,
  GET_CLUSTER_DETAILS_SUCCESS,
  GET_CLUSTER_DETAILS_ERROR,
  START_CLEANING_CLUSTER_DETAILS,
  CLEAN_CLUSTER_DETAILS_SUCCESS,
  CLEAN_CLUSTER_DETAILS_ERROR,
} from '../types'

// Initial State
const initialState = {
  information: null,
  pairMaximum: null,
  conformers: null,
  error: null,
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case START_GETTING_CLUSTER_DETAILS:
    case START_CLEANING_CLUSTER_DETAILS:
      return {
        ...state,
        loading: action.payload,
      }
    case GET_CLUSTER_DETAILS_SUCCESS:
      return {
        ...state,
        information: action.payload.res1,
        pairMaximum: action.payload.res2,
        conformers: action.payload.res3,
        loading: false,
        error: null,
      }
    case GET_CLUSTER_DETAILS_ERROR:
    case CLEAN_CLUSTER_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case CLEAN_CLUSTER_DETAILS_SUCCESS:
      return {
        ...state,
        information: null,
        pairMaximum: null,
        conformers: null,
        error: null,
        loading: false,
      }
    default:
      return state
  }
}
