const SelectedGig = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_GIG':
      return action.gig
    case 'CLEAR_SELECTED_GIG':
      return action.gig
    default:
      return state
    }
  }

export default SelectedGig
