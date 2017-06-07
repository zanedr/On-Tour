import { connect } from 'react-redux';
import EditGigInfo from './EditGigInfo';
import { editGig, selectGig, handleSetCheck } from '../../actions/actions'


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
    },
    handleSetCheck: (check) => {
      dispatch(handleSetCheck(check))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGigInfo)
