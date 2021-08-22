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

// Function that gets the search results by name
export function getSearchResultsByNameAction(name) {
  return async (dispatch) => {
    dispatch(getSearchResults())
    try {
      const result = await clientAxios.get(`/search/clusters/name/${name}`)
      dispatch(getSearchResultsSuccess(result.data.payload))
    } catch (error) {
      dispatch(getSearchResultsError())
    }
  }
}

// Function that gets the search results by Organism
export function getSearchResultsByOrganismAction(organism) {
  return async (dispatch) => {
    dispatch(getSearchResults())
    try {
      const result = await clientAxios.get(`/search/clusters/organism/${organism}`)
      dispatch(getSearchResultsSuccess(result.data.payload))
    } catch (error) {
      dispatch(getSearchResultsError())
    }
  }
}

// Function that gets the search results by UniProt
export function getSearchResultsByUniProtAction(uniprot) {
  return async (dispatch) => {
    dispatch(getSearchResults())
    try {
      const result = await clientAxios.get(`/search/clusters/uniprot/${uniprot}`)
      dispatch(getSearchResultsSuccess(result.data.payload))
    } catch (error) {
      dispatch(getSearchResultsError())
    }
  }
}

// Function that gets the search results by all fields
export function getSearchResultsByAllFieldsAction(value) {
  return async (dispatch) => {
    dispatch(getSearchResults())
    try {
      const result = await clientAxios.get(`/search/clusters/allFields/${value}`)
      dispatch(getSearchResultsSuccess(result.data.payload))
    } catch (error) {
      dispatch(getSearchResultsError())
    }
  }
}

// Function that gets the search results by all fields
export function getSearchResultsFromAdvSearchAction(data) {
  return async (dispatch) => {
    dispatch(getSearchResults())
    try {
      const result = await clientAxios.post('/search/clusters/allFields', data)
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
