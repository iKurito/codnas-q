import clientAxios from '../config/axios'
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
    let value = 0
    if (group === 'a') {
      value = 1
    } else if (group === 'b') {
      value = 2
    } else if (group === 'c') {
      value = 3
    }
    dispatch(getSearchResultsByGroup(value))
    try {
      const result = await clientAxios.get(`/search/clusters/group/${group}`)
      dispatch(getSearchResultsByGroupSuccess(result.data.payload))
    } catch (error) {
      dispatch(getSearchResultsByGroupError())
    }
  }
}

const getSearchResultsByGroup = (value) => ({
  type: START_GETTING_SEARCH_RESULTS_BY_GROUP,
  payload: value,
})

const getSearchResultsByGroupSuccess = (data) => ({
  type: GET_SEARCH_RESULTS_BY_GROUP_SUCCESS,
  payload: data,
})

const getSearchResultsByGroupError = () => ({
  type: GET_SEARCH_RESULTS_BY_GROUP_ERROR,
  payload: true,
})

// Function that gets the search results by name
export function getSearchResultsByNameAction(name) {
  return async (dispatch) => {
    dispatch(getSearchResultsByName(name))
    try {
      const result = await clientAxios.get(`/search/clusters/name/${name}`)
      dispatch(getSearchResultsByNameSuccess(result.data.payload))
    } catch (error) {
      dispatch(getSearchResultsByNameError())
    }
  }
}

const getSearchResultsByName = (value) => ({
  type: START_GETTING_SEARCH_RESULTS_BY_NAME,
  payload: value,
})

const getSearchResultsByNameSuccess = (data) => ({
  type: GET_SEARCH_RESULTS_BY_NAME_SUCCESS,
  payload: data,
})

const getSearchResultsByNameError = () => ({
  type: GET_SEARCH_RESULTS_BY_NAME_ERROR,
  payload: true,
})

// Function that gets the search results by Organism
export function getSearchResultsByOrganismAction(organism) {
  return async (dispatch) => {
    dispatch(getSearchResultsByOrganism(organism))
    try {
      const result = await clientAxios.get(`/search/clusters/organism/${organism}`)
      dispatch(getSearchResultsByOrganismSuccess(result.data.payload))
    } catch (error) {
      dispatch(getSearchResultsByOrganismError())
    }
  }
}

const getSearchResultsByOrganism = (value) => ({
  type: START_GETTING_SEARCH_RESULTS_BY_ORGANISM,
  payload: value,
})

const getSearchResultsByOrganismSuccess = (data) => ({
  type: GET_SEARCH_RESULTS_BY_ORGANISM_SUCCESS,
  payload: data,
})

const getSearchResultsByOrganismError = () => ({
  type: GET_SEARCH_RESULTS_BY_ORGANISM_ERROR,
  payload: true,
})

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
    dispatch(getSearchResultsByAllFields(value))
    try {
      const result = await clientAxios.get(`/search/clusters/allFields/${value}`)
      dispatch(getSearchResultsByAllFieldsSuccess(result.data.payload))
    } catch (error) {
      dispatch(getSearchResultsByAllFieldsError())
    }
  }
}

const getSearchResultsByAllFields = (value) => ({
  type: START_GETTING_SEARCH_RESULTS_ALL_FIELDS,
  payload: value,
})

const getSearchResultsByAllFieldsSuccess = (data) => ({
  type: GET_SEARCH_RESULTS_BY_ALL_FIELDS_SUCCESS,
  payload: data,
})

const getSearchResultsByAllFieldsError = () => ({
  type: GET_SEARCH_RESULTS_BY_ALL_FIELDS_ERROR,
  payload: true,
})

// Function that gets the search results by all fields from Adv Search
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
