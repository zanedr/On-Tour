import { connect } from 'react-redux'
import Main from './Main'
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)
