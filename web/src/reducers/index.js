import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import clusterReducer from './clusterReducer'

export default combineReducers({
  search: searchReducer,
  cluster: clusterReducer,
})
