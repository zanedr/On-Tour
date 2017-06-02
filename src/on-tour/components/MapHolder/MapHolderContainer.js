import { connect } from 'react-redux';
import MapHolder from './MapHolder';

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapHolder)
