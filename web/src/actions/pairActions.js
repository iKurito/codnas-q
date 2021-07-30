import clientAxios from '../config/axios'
import {
  START_GETTING_PAIRS_DETAILS,
  GET_PAIRS_DETAILS_SUCCESS,
  GET_PAIRS_DETAILS_ERROR,
} from '../types'

// Function that gets the pair detail
export function getPairsDetailsAction(query) {
  return async (dispatch) => {
    dispatch(getPairsDetails())
    try {
      console.log('HOLA 1')
      const urlComparison = `/pair/comparison/${query}`
      const [res1] = await Promise.all([clientAxios(urlComparison)])
      console.log('HOLA 2')
      dispatch(
        getPairsDetailsSuccess({
          res1: res1.data.payload,
        })
      )
    } catch (error) {
      dispatch(getPairsDetailsError())
    }
  }
}

const getPairsDetails = () => ({
  type: START_GETTING_PAIRS_DETAILS,
  payload: true,
})

const getPairsDetailsSuccess = (data) => ({
  type: GET_PAIRS_DETAILS_SUCCESS,
  payload: data,
})

const getPairsDetailsError = () => ({
  type: GET_PAIRS_DETAILS_ERROR,
  payload: true,
})
