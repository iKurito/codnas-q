import clientAxios from '../config/axios'
import {
  START_GETTING_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_ERROR,
  START_CLEANING_SEARCH_RESULTS,
  CLEAN_SEARCH_RESULTS_SUCCESS,
  CLEAN_SEARCH_RESULTS_ERROR,
} from '../types'

// Function that gets the search results
export function getSearchResultsAction() {
  return async (dispatch) => {
    dispatch(getSearchResults())
    try {
      const result = await clientAxios.get('/search/clusters')
      dispatch(getSearchResultsSuccess(result.data.payload))
    } catch (error) {
      dispatch(getSearchResultsError())
    }
  }
}

const getSearchResults = () => ({
  type: START_GETTING_SEARCH_RESULTS,
  payload: true,
})

const getSearchResultsSuccess = (data) => ({
  type: GET_SEARCH_RESULTS_SUCCESS,
  payload: data,
})

const getSearchResultsError = () => ({
  type: GET_SEARCH_RESULTS_ERROR,
  payload: true,
})

// Function that gets the search results by group
export function getSearchResultsByGroupAction(group) {
  return async (dispatch) => {
    dispatch(getSearchResults())
    try {
      const result = await clientAxios.get(`/search/clusters/group/${group}`)
      dispatch(getSearchResultsSuccess(result.data.payload))
    } catch (error) {
      dispatch(getSearchResultsError())
    }
  }
}

// Function that cleans the search results
export function cleanSearchResultsAction() {
  return async (dispatch) => {
    dispatch(cleanSearchResults())
    try {
      dispatch(cleanSearchResultsSuccess())
    } catch (error) {
      dispatch(cleanSearchResultsError())
    }
  }
}

const cleanSearchResults = () => ({
  type: START_CLEANING_SEARCH_RESULTS,
  payload: true,
})

const cleanSearchResultsSuccess = (data) => ({
  type: CLEAN_SEARCH_RESULTS_SUCCESS,
  payload: data,
})

const cleanSearchResultsError = () => ({
  type: CLEAN_SEARCH_RESULTS_ERROR,
  payload: true,
})
