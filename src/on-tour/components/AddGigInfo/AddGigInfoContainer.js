import { connect } from 'react-redux';
import AddGigInfo from './AddGigInfo';
import { addLocation, handleSetCheck } from '../../actions/actions'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddLocation: (location) => (
      dispatch(addLocation(location))
    ),
    handleSetCheck: (check) => {
      dispatch(handleSetCheck(check))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGigInfo)
