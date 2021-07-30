import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import clusterReducer from './clusterReducer'
import pairReducer from './pairReducer'

export default combineReducers({
  search: searchReducer,
  cluster: clusterReducer,
  pair: pairReducer,
})
