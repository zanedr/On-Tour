import { combineReducers } from 'redux';
import AppReducer from './AppReducer'
import Locations from './LocationReducer'
import MPG from './MPG'
import SelectedGig from './SelectedGig'

const rootReducer = combineReducers({
  AppReducer,
  Locations,
  MPG,
  SelectedGig
})

export default rootReducer;
