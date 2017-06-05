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
      let reorderedGigArray = state.filter((singleGig, gigIndex) => {
        if(action.gig.index !== singleGig.index) {
          return singleGig
        }
      });
      reorderedGigArray.splice(action.gig.order - 1, 0, action.gig)
      let correctedGigArray = []
      reorderedGigArray.forEach(singleGig => {
        let tempGigHolder = singleGig
        tempGigHolder.index = correctedGigArray.length
        tempGigHolder.order = correctedGigArray.length + 1
        correctedGigArray[correctedGigArray.length] = tempGigHolder
      })
      return correctedGigArray

    case 'DELETE_GIG':
      let reorderDeleteGig = 0;
      let updatedGigs = state.filter((singleGig, gigIndex) => {
        if(action.gig.index !== singleGig.index) {
          singleGig.index = reorderDeleteGig
          singleGig.order = reorderDeleteGig + 1
          reorderDeleteGig++
          return singleGig
        }
      })
      return updatedGigs

    default:
      return state
    }
  }

export default Locations

// let reorder = 0;
// let reorderedGig = action.gig;
// reorderedGig.index = action.gig.order - 1
// reorderedGigs[reorderedGig.index] = reorderedGig
// state.forEach((singleGig, gigIndex) => {
//   if(singleGig.order === action.gig.order) {
//     reorder++
//   }
//   else if(reorder === singleGig.index) {
//     reorder++
//     singleGig.index = reorder;
//     singleGig.order = reorder + 1;
//     reorderedGigs[reorder] = singleGig
//     reorder++
//   }
//   else {
//     singleGig.index = reorder
//     singleGig.order = reorder + 1
//     reorderedGigs[reorder] = singleGig
//     reorder++
//   }
// })
// return reorderedGigs
