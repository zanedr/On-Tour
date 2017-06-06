import { combineReducers } from 'redux';
import AppReducer from './AppReducer'
import Locations from './Locations'
import MPG from './MPG'
import SelectedGig from './SelectedGig'
import GasPrices from './GasPrices'
import Check from './Check'

const rootReducer = combineReducers({
  AppReducer,
  Check,
  Locations,
  MPG,
  GasPrices,
  SelectedGig,
})

export default rootReducer;
