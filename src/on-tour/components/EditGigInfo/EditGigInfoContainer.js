import { connect } from 'react-redux';
import EditGigInfo from './EditGigInfo';
import { editGig } from '../../actions/actions'
import { selectGig } from '../../actions/actions'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleEditGig: (gig) => {
      dispatch(editGig(gig))
    },
    handleSelectGig: (gig) => {
      dispatch(selectGig(gig))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGigInfo)
