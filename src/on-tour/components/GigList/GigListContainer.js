import { connect } from 'react-redux';
import GigList from './GigList';
import { selectGig, deleteGig, clearSelectGig, handleSetCheck } from '../../actions/actions'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    selectGig: (gig) => {
      dispatch(selectGig(gig))
    },
    deleteGig: (gig) => {
      dispatch(deleteGig(gig))
    },
    clearSelectGig: (gig) => (
      dispatch(clearSelectGig(gig))
    ),
    handleSetCheck: (check) => {
      dispatch(handleSetCheck(check))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GigList)
