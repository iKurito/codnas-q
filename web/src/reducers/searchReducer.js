import {
  START_GETTING_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_ERROR,
  START_CLEANING_SEARCH_RESULTS,
  CLEAN_SEARCH_RESULTS_SUCCESS,
  CLEAN_SEARCH_RESULTS_ERROR,
  START_GETTING_SEARCH_RESULTS_BY_NAME,
  GET_SEARCH_RESULTS_BY_NAME_SUCCESS,
  GET_SEARCH_RESULTS_BY_NAME_ERROR,
  START_GETTING_SEARCH_RESULTS_BY_DESCRIPTION,
  GET_SEARCH_RESULTS_BY_DESCRIPTION_SUCCESS,
  GET_SEARCH_RESULTS_BY_DESCRIPTION_ERROR,
  START_GETTING_SEARCH_RESULTS_BY_ORGANISM,
  GET_SEARCH_RESULTS_BY_ORGANISM_SUCCESS,
  GET_SEARCH_RESULTS_BY_ORGANISM_ERROR,
  START_GETTING_SEARCH_RESULTS_ALL_FIELDS,
  GET_SEARCH_RESULTS_BY_ALL_FIELDS_SUCCESS,
  GET_SEARCH_RESULTS_BY_ALL_FIELDS_ERROR,
  START_GETTING_SEARCH_RESULTS_BY_GROUP,
  GET_SEARCH_RESULTS_BY_GROUP_SUCCESS,
  GET_SEARCH_RESULTS_BY_GROUP_ERROR,
} from '../types'

// Initial State
const initialState = {
  searchResults: [],
  error: null,
  loading: false,
  clusterField: '',
  nameField: '',
  descriptionField: '',
  organismField: '',
  uniprotField: '',
  groupField: 0,
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
    case GET_SEARCH_RESULTS_BY_NAME_SUCCESS:
    case GET_SEARCH_RESULTS_BY_DESCRIPTION_SUCCESS:
    case GET_SEARCH_RESULTS_BY_ORGANISM_SUCCESS:
    case GET_SEARCH_RESULTS_BY_ALL_FIELDS_SUCCESS:
    case GET_SEARCH_RESULTS_BY_GROUP_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        error: null,
        loading: false,
      }
    case GET_SEARCH_RESULTS_ERROR:
    case CLEAN_SEARCH_RESULTS_ERROR:
    case GET_SEARCH_RESULTS_BY_NAME_ERROR:
    case GET_SEARCH_RESULTS_BY_DESCRIPTION_ERROR:
    case GET_SEARCH_RESULTS_BY_ORGANISM_ERROR:
    case GET_SEARCH_RESULTS_BY_ALL_FIELDS_ERROR:
    case GET_SEARCH_RESULTS_BY_GROUP_ERROR:
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
        nameField: '',
        descriptionField: '',
        organismField: '',
        uniprotField: '',
        groupField: 0,
      }
    case START_GETTING_SEARCH_RESULTS_BY_NAME:
      return {
        ...state,
        loading: true,
        clusterField: '',
        nameField: action.payload,
        descriptionField: '',
        organismField: '',
        uniprotField: '',
        groupField: 0,
      }
    case START_GETTING_SEARCH_RESULTS_BY_DESCRIPTION:
      return {
        ...state,
        loading: true,
        clusterField: '',
        nameField: '',
        descriptionField: action.payload,
        organismField: '',
        uniprotField: '',
        groupField: 0,
      }
    case START_GETTING_SEARCH_RESULTS_BY_ORGANISM:
      return {
        ...state,
        loading: true,
        clusterField: '',
        nameField: '',
        descriptionField: '',
        organismField: action.payload,
        uniprotField: '',
        groupField: 0,
      }
    case START_GETTING_SEARCH_RESULTS_BY_GROUP:
      return {
        ...state,
        loading: true,
        clusterField: '',
        nameField: '',
        descriptionField: '',
        organismField: '',
        uniprotField: '',
        groupField: action.payload,
      }
    case START_GETTING_SEARCH_RESULTS_ALL_FIELDS:
      return {
        ...state,
        loading: true,
        clusterField: action.payload,
        nameField: action.payload,
        descriptionField: action.payload,
        organismField: action.payload,
        uniprotField: action.payload,
        groupField: 0,
      }
    default:
      return state
  }
}
