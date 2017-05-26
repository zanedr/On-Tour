const Locations = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      let currentLocations = state;
      if(state.length) {
        currentLocations[currentLocations.length] = action.location
        return currentLocations
      } else {
        return [action.location]
      }
    case 'EDIT_GIG':
      let edited = state.map(val => {
        if(val.index !== action.gig.index) {
          return val
        }
        if(val.index === action.gig.index) {
          return action.gig
        }
      })
      return edited
    default:
      return state
    }
  }

export default Locations
