import clientAxios from '../config/axios'
import {
  START_GETTING_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_ERROR,
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
      const result = await clientAxios.get(`/search/clusters/${group}`)
      dispatch(getSearchResultsSuccess(result.data.payload))
    } catch (error) {
      dispatch(getSearchResultsError())
    }
  }
}
