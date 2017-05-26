import { connect } from 'react-redux';
import App from './App';
import { handleSetMPG } from './actions/actions'
import { addLocation } from './actions/actions'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleSetMPG: (mpg) => {
      dispatch(handleSetMPG(mpg))
    },
    initialLocation: (location) => {
      dispatch(addLocation(location))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
