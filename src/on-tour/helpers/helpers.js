import React, { Component } from 'react'
import { googleAPIKey, doeAPIKey} from '../APIKeys'

export const dynamicGasPrices = () => {
  fetch(`http://api.eia.gov/category/?api_key=${doeAPIKey}&category_id=240691`)
  .then(res => res.json())
  .then(ans => console.log('dynamic', ans))
}

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
           )  .toFixed(1)
  })
}

export const getState = (address) => {
  const splitAddress = address.split(',')
  const state = splitAddress[splitAddress.length - 2].slice(1,3)
  return state
}

export const gasFetch = (state) => {
  console.log('GAS STATE', state);
  return fetch(`http://api.eia.gov/series/?api_key=${doeAPIKey}&series_id=${gasQuery(state)}`)
  .then(res => res.json())
  .then(ans => {
      return ans.series["0"].data["0"]["1"]
      console.log('GAS ANS', ans);
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

const stubtown = [{
  destination_addresses: [
    "San Francisco, CA, USA"
      ],
      origin_addresses: [
        "Denver, CO, USA"
        ],
        rows: [
          {
          elements: [
          {
          distance: {
          text: "1,254 mi",
          value: 2018513
          },
          duration: {
          text: "18 hours 36 mins",
          value: 66951
          },
        status: "OK"
        }
      ]
    }
  ],
  status: "OK"
},
{
destination_addresses: [
"Los Angeles, CA, USA"
],
origin_addresses: [
"San Francisco, CA, USA"
],
rows: [
{
elements: [
{
distance: {
text: "383 mi",
value: 616623
},
duration: {
text: "5 hours 40 mins",
value: 20410
},
status: "OK"
}
]
}
],
status: "OK"
},
{
destination_addresses: [
"Portland, OR, USA"
],
origin_addresses: [
"Los Angeles, CA, USA"
],
rows: [
{
elements: [
{
distance: {
text: "963 mi",
value: 1549343
},
duration: {
text: "14 hours 34 mins",
value: 52458
},
status: "OK"
}
]
}
],
status: "OK"
},
{
destination_addresses: [
"New York, NY, USA"
],
origin_addresses: [
"Portland, OR, USA"
],
rows: [
{
elements: [
{
distance: {
text: "2,897 mi",
value: 4661625
},
duration: {
text: "1 day 19 hours",
value: 153284
},
status: "OK"
}
]
}
],
status: "OK"
}]
