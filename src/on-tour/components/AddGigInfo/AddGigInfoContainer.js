import { connect } from 'react-redux';
import AddGigInfo from './AddGigInfo';
import { addLocation } from '../../actions/actions'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddLocation: (location) => (
      dispatch(addLocation(location))
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGigInfo)
