import { connect } from 'react-redux';
import Notes from './Notes';

function mapStateToProps(state) {
  return {gig: state.SelectedGig}
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
