// import thunk from 'redux-thunk'

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

export const handleSetCheck = (check) => {
  return {
    type: 'SET_LOCATION_CHECK',
    check
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

export const deleteGig = (gig) => {
  return {
    type: 'DELETE_GIG',
    gig
  }
}

export const clearSelectGig = (gig) => {
  return {
    type: 'CLEAR_SELECTED_GIG',
    gig
  }
}

export const setGasPrices = (gas) => {
  return {
    type: 'SET_GAS_PRICES',
    gas
  }
}

export const gasPrices = () => {
  return (dispatch) => {
    fetch('http://api.eia.gov/series/?api_key=a9b717b70e6b150a26e37aaded30b914&series_id=PET.EMM_EPMRU_PTE_NUS_DPG.W')
    .then(res => res.json())
    .then((gas) => {dispatch(setGasPrices(gas))})
    .catch(error => {throw(error)})
  }
}
