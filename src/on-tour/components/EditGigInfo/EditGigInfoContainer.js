import { connect } from 'react-redux';
import EditGigInfo from './EditGigInfo';
import { editGig } from '../../actions/actions'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleEditGig: (gig) => {
      dispatch(editGig(gig))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGigInfo)
