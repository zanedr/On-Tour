const Locations = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return Object.assign([], state, action.location)
    default:
      return state
    }
  }

export default Locations
