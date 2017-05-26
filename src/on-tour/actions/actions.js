import thunk from 'redux-thunk'

export const handleSetMPG = (mpg)  =>  {
  return {
    type: 'SET_MPG',
    mpg
  }
}

export const addLocation = (location) => {
  return {
    type: 'ADD_LOCATION',
    location
  }
}

export const editGig = (gig) => {
  return {
    type: 'EDIT_GIG',
    gig
  }
}

export const selectGig = (gig) => {
  return {
    type: 'SELECT_GIG',
    gig
  }
}
