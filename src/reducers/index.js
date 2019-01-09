import { combineReducers } from 'redux'
import todos from './todos'
import doList from './doList'
const rootReducer = combineReducers({
  todos, doList
})
export default rootReducer