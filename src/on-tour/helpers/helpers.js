import React, { Component } from 'react'
// import { distance } from 'google-distance'

export const gasPrices = () => {
  fetch('http://api.eia.gov/series/?api_key=a9b717b70e6b150a26e37aaded30b914&series_id=PET.EMM_EPMRU_PTE_NUS_DPG.W')
  .then(res => res.json())
  .then(ans => console.log(ans))
}

export const fetchHelper = (address) => {
  const fetchInfo = {body: {address: address}}
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDs3ljSEnfR3nRHOw9bHYwa9XPUjzaFnh0`)
  .then((answer) => answer.json())
}

export const fetchInfo = {method: "get",
                          status: "200",
                          headers: {"Access-Control-Allow-Origin":"*",
                                    "Content-Type": "application/x-www-form-urlencoded"}}

// export const locationDistances = (locations) => {
//   locations.map((location, index) => {
//     console.log('LOCATIONS', location.location);
//     if(location && locations[index+1]) {
//       console.log('DESTINATION', `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${location.location}&destinations=${locations[index+1].location}&key=AIzaSyDs3ljSEnfR3nRHOw9bHYwa9XPUjzaFnh0`);
//       fetch(`http://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${location.location}&destinations=${locations[index+1].location}&key=AIzaSyDs3ljSEnfR3nRHOw9bHYwa9XPUjzaFnh0`, fetchInfo)
//       .then((distance) => console.log('DISTANCE!', distance))
//       .then((res) => {console.log(locations[index+1], location, res)})
//     }
//   })
// }
// export const locationDistances = (locations) => {
//   const updated = locations.map((location, index) => {
//     // console.log('LOCATIONS', location.location);
//     if(location && locations[index+1]) {
//       fetch(`../OleStubby/destination${index}`)
//       .then((distance) => distance.json())
//       .then((res) => {console.log('RESRESRES', res);
//                       return res})
//     }
//   })
//   console.log("MAPMAPMAP", updated);
//   return updated
// }
export const locationDistances = (locations) => {
  return locations.map((location, index) => {
    if(location && locations[index+1]) {
      const stub = stubtown[index]
      const distance = stub.rows[0].elements[0].distance.text.replace(/\D/g,'')
      const fixedDistance = parseInt(distance)
      locations[index+1].distance_from_last = fixedDistance
        console.log('OLE STUBBY', stub, distance);
      return location
    }
    else if(location && !locations[index+1]){
      return location
    }
  })
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
