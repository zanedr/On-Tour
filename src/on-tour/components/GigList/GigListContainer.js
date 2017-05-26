import { connect } from 'react-redux';
import GigList from './GigList';
import { selectGig } from '../../actions/actions'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    selectGig: (gig) => {
      dispatch(selectGig(gig))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GigList)
