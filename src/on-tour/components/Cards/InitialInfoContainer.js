import { connect } from 'react-redux';
import InitialInfo from './InitialInfo';
import { handleSetCheck } from '../../actions/actions'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleSetCheck: (check) => {
      dispatch(handleSetCheck(check))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialInfo)
