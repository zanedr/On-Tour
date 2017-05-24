import { combineReducers } from 'redux';
import AppReducer from './AppReducer'
import Locations from './LocationReducer'
import MPG from './MPG'

const rootReducer = combineReducers({
  AppReducer,
  Locations,
  MPG
})

export default rootReducer;
