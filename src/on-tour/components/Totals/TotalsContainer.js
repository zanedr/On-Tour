import { connect } from 'react-redux';
import Totals from './Totals';
import { handleSetMPG } from '../../actions/actions'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleSetMPG: (mpg) => {
      dispatch(handleSetMPG(mpg))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Totals)
