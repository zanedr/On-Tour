import { combineReducers } from 'redux';
import AppReducer from './AppReducer'
import Locations from './Locations'
import MPG from './MPG'
import SelectedGig from './SelectedGig'
import GasPrices from './GasPrices'

const rootReducer = combineReducers({
  AppReducer,
  Locations,
  MPG,
  GasPrices,
  SelectedGig,
})

export default rootReducer;
