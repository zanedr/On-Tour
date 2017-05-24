const MPG = (state = [], action) => {
  switch (action.type) {
    case 'SET_MPG':
      return action.mpg
    default:
      return state
    }
  }

export default MPG
