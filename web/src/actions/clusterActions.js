import clientAxios from '../config/axios'
import {
  START_GETTING_CLUSTER_INFORMATION,
  GET_CLUSTER_INFORMATION_SUCCESS,
  GET_CLUSTER_INFORMATION_ERROR,
} from '../types'

// Function that gets the cluster detail
export function getClusterDetailAction(clusterId) {
  return async (dispatch) => {
    dispatch(getClusterDetail())
    try {
      const urlClusterInformation = `/cluster/information/${clusterId}`
      const urlPairMaximumQuaternary = `/cluster/pairMaxQuat/${clusterId}`
      const [res1, res2] = await Promise.all([
        clientAxios(urlClusterInformation),
        clientAxios(urlPairMaximumQuaternary),
      ])
      dispatch(getClusterDetailSuccess({ res1: res1.data.payload, res2: res2.data.payload }))
    } catch (error) {
      dispatch(getClusterDetailError())
    }
  }
}

const getClusterDetail = () => ({
  type: START_GETTING_CLUSTER_INFORMATION,
  payload: true,
})

const getClusterDetailSuccess = (data) => ({
  type: GET_CLUSTER_INFORMATION_SUCCESS,
  payload: data,
})

const getClusterDetailError = () => ({
  type: GET_CLUSTER_INFORMATION_ERROR,
  payload: true,
})
