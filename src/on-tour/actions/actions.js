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
