import clientAxios from '../config/axios'
import {
  START_GETTING_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_ERRROR,
} from '../types'

// Function that gets the search results
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(getSearchResults())
    try {
      const respuesta = await clientAxios.get('/productos')
      dispatch(getSearchResultsSuccess(respuesta.data))
    } catch (error) {
      dispatch(getSearchResultsError())
    }
  }
}

const getSearchResults = () => ({
  type: START_GETTING_SEARCH_RESULTS,
  payload: true,
})

const getSearchResultsSuccess = (productos) => ({
  type: GET_SEARCH_RESULTS_SUCCESS,
  payload: productos,
})

const getSearchResultsError = () => ({
  type: GET_SEARCH_RESULTS_ERRROR,
  payload: true,
})
