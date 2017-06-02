import { connect } from 'react-redux';
import GigList from './GigList';
import { selectGig } from '../../actions/actions'
import { deleteGig } from '../../actions/actions'
import { clearSelectGig } from '../../actions/actions'

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
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GigList)
