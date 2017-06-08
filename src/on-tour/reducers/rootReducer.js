import { combineReducers } from 'redux';
import AppReducer from './AppReducer'
import Locations from './Locations'
import MPG from './MPG'
import SelectedGig from './SelectedGig'
import Check from './Check'

const rootReducer = combineReducers({
  AppReducer,
  Check,
  Locations,
  MPG,
  SelectedGig,
})

export default rootReducer;
