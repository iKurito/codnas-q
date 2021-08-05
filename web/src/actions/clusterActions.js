import clientAxios from '../config/axios'
import {
  START_GETTING_CLUSTER_DETAILS,
  GET_CLUSTER_DETAILS_SUCCESS,
  GET_CLUSTER_DETAILS_ERROR,
  START_CLEANING_CLUSTER_DETAILS,
  CLEAN_CLUSTER_DETAILS_SUCCESS,
  CLEAN_CLUSTER_DETAILS_ERROR,
} from '../types'

// Function that gets the cluster detail
export function getClusterDetailAction(clusterId) {
  return async (dispatch) => {
    dispatch(getClusterDetail())
    try {
      const urlClusterInformation = `/cluster/information/${clusterId}`
      const urlPairMaximumQuaternary = `/cluster/pairMaxQuat/${clusterId}`
      const urlConformers = `/cluster/conformers/${clusterId}`
      const [res1, res2, res3] = await Promise.all([
        clientAxios(urlClusterInformation),
        clientAxios(urlPairMaximumQuaternary),
        clientAxios(urlConformers),
      ])
      dispatch(
        getClusterDetailSuccess({
          res1: res1.data.payload,
          res2: res2.data.payload,
          res3: res3.data.payload,
        })
      )
    } catch (error) {
      dispatch(getClusterDetailError())
    }
  }
}

const getClusterDetail = () => ({
  type: START_GETTING_CLUSTER_DETAILS,
  payload: true,
})

const getClusterDetailSuccess = (data) => ({
  type: GET_CLUSTER_DETAILS_SUCCESS,
  payload: data,
})

const getClusterDetailError = () => ({
  type: GET_CLUSTER_DETAILS_ERROR,
  payload: true,
})

// Function that cleans the cluster details
export function cleanClusterDetailsAction() {
  return (dispatch) => {
    dispatch(cleanClusterDetails())
    try {
      dispatch(cleanClusterDetailsSuccess())
    } catch (error) {
      dispatch(cleanClusterDetailsError())
    }
  }
}

const cleanClusterDetails = () => ({
  type: START_CLEANING_CLUSTER_DETAILS,
  payload: true,
})

const cleanClusterDetailsSuccess = () => ({
  type: CLEAN_CLUSTER_DETAILS_SUCCESS,
})

const cleanClusterDetailsError = () => ({
  type: CLEAN_CLUSTER_DETAILS_ERROR,
  payload: true,
})
