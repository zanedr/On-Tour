import { connect } from 'react-redux';
import Totals from './Totals';
import { handleSetMPG } from '../../actions/actions'
import { handleSetCheck } from '../../actions/actions'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleSetMPG: (mpg) => {
      dispatch(handleSetMPG(mpg))
    },
    handleSetCheck: (check) => {
      dispatch(handleSetCheck(check))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Totals)
