const GasPrices = (state = {}, action) => {
  switch(action.type) {
    case 'SET_GAS_PRICES':
      return action.gas.series[0].data[0][1]
    default:
      return state
  }
}

export default GasPrices
