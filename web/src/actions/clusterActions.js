import clientAxios from '../config/axios'
import {
  START_GETTING_CLUSTER_INFORMATION,
  GET_CLUSTER_INFORMATION_SUCCESS,
  GET_CLUSTER_INFORMATION_ERROR,
} from '../types'

// Function that gets the cluster information
export function getClusterInformationAction(clusterId) {
  return async (dispatch) => {
    dispatch(getClusterInformation())
    try {
      const result = await clientAxios.get(`/cluster/information/${clusterId}`)
      dispatch(getClusterInformationSuccess(result.data.payload))
    } catch (error) {
      dispatch(getClusterInformationError())
    }
  }
}

const getClusterInformation = () => ({
  type: START_GETTING_CLUSTER_INFORMATION,
  payload: true,
})

const getClusterInformationSuccess = (data) => ({
  type: GET_CLUSTER_INFORMATION_SUCCESS,
  payload: data,
})

const getClusterInformationError = () => ({
  type: GET_CLUSTER_INFORMATION_ERROR,
  payload: true,
})
