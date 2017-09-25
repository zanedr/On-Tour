import { googleAPIKey, doeAPIKey} from '../APIKeys'

export const fetchHelper = (address) => {
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleAPIKey}`)
  .then((answer) => answer.json())
}

export const adjustDistance = (origin, destination) => {
  const address = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&units=imperial&key=${googleAPIKey}`

  return fetch(address)
  .then((distance) => distance.json())
  .then((res) => {
    return parseInt(
              res.rows[0].elements[0].distance.text
              .replace(/([^1234567890.])+/g,'')
           , 10).toFixed(1)
  })
}

export const getState = (address) => {
  const splitAddress = address.split(',')
  const state = splitAddress[splitAddress.length - 2].slice(1,3)
  return state
}

export const gasFetch = (state) => {
  return fetch(`https://api.eia.gov/series/?api_key=${doeAPIKey}&series_id=${gasQuery(state)}`)
  .then(res => res.json())
  .then(ans => {
      return ans.series["0"].data["0"]["1"]
  }).catch(console.log('GAS CATCH'))
}

export const gasQuery = (state) => {
  if(state === 'CA') {
    return `PET.EMM_EPMR_PTE_SCA_DPG.W`


  } else if(state === 'CO') {
    return `PET.EMM_EPMR_PTE_SCO_DPG.W`


  } else if (state === 'FL') {
    return `PET.EMM_EPMR_PTE_SFL_DPG.W`


  } else if (state === 'MA') {
    return `PET.EMM_EPMR_PTE_SMA_DPG.W`


  } else if (state === 'MN') {
    return `PET.EMM_EPMR_PTE_SMN_DPG.W`


  } else if (state === 'NY') {
    return `PET.EMM_EPMR_PTE_SNY_DPG.W`


  } else if (state === 'OH') {
    return `PET.EMM_EPMR_PTE_SOH_DPG.W`


  } else if (state === 'TX') {
    return `PET.EMM_EPMR_PTE_STX_DPG.W`


  } else if (state === 'WA') {
    return `PET.EMM_EPMR_PTE_SWA_DPG.W`


  } else if (state === 'ME' ||
             state === 'NH' ||
             state === 'VT' ||
             state === 'RI' ||
             state === 'CT') {
      return `PET.EMM_EPMRU_PTE_R1X_DPG.W`

  } else if (state === 'PA' ||
             state === 'MD' ||
             state === 'DE' ||
             state === 'NJ' ) {
      return `PET.EMM_EPMRU_PTE_R1Y_DPG.W`

  } else if (state === 'WV' ||
             state === 'VA' ||
             state === 'NC' ||
             state === 'SC' ||
             state === 'GA') {
      return `PET.EMM_EPMRU_PTE_R1Z_DPG.W`

  } else if (state === 'MI' ||
             state === 'IN' ||
             state === 'KY' ||
             state === 'TN' ||
             state === 'IL' ||
             state === 'WI' ||
             state === 'ND' ||
             state === 'SD' ||
             state === 'NE' ||
             state === 'KS' ||
             state === 'OK' ||
             state === 'MO' ||
             state === 'IA') {
      return `PET.EMM_EPMRU_PTE_R20_DPG.W`

  } else if (state === 'NM' ||
             state === 'AR' ||
             state === 'MS' ||
             state === 'AL' ||
             state === 'LA') {
      return `PET.EMM_EPMRU_PTE_R30_DPG.W`

  } else if (state === 'MT' ||
             state === 'ID' ||
             state === 'WY' ||
             state === 'MT' ||
             state === 'UT') {
      return `PET.EMM_EPMRU_PTE_R40_DPG.W`

  } else if (state === 'OR' ||
             state === 'AK' ||
             state === 'HI' ||
             state === 'NV' ||
             state === 'AZ') {
      return `PET.EMM_EPMRU_PTE_R5XCA_DPG.W`
  }
}
