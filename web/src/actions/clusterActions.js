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
      const [res1] = await Promise.all([clientAxios(urlClusterInformation)])
      dispatch(getClusterDetailSuccess(res1.data.payload))
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
