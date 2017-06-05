const Check = (state = [], action) => {
  switch (action.type) {
    case 'SET_LOCATION_CHECK':
      return action.check
    default:
      return state
    }
  }

export default Check
