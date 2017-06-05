import React from 'react'
import axios from 'axios'

export const gasPrices = () => {
  fetch('http://api.eia.gov/series/?api_key=a9b717b70e6b150a26e37aaded30b914&series_id=PET.EMM_EPMRU_PTE_NUS_DPG.W')
  .then(res => res.json())
  .then(ans => console.log(ans))
}

// original
export const locationDistances = (locations) => {
  locations.map((location, index) => {
    console.log('LOCATIONS', location.location);
    if(location && locations[index+1]) {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${location.location}&destinations=${locations[index+1].location}&key=AIzaSyDs3ljSEnfR3nRHOw9bHYwa9XPUjzaFnh0`, fetchInfo)
      .then((distance) => console.log('DISTANCE!', distance))
      .then((res) => {console.log(locations[index+1], location, res)})
    }
  })
}

// export const locationDistances = (locations) => {
//   locations.map((location, index) => {
//     console.log('LOCATIONS', location.location);
//     if(location && locations[index+1]) {
//       console.log('DESTINATION', `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${location.location}&destinations=${locations[index+1].location}&key=AIzaSyDs3ljSEnfR3nRHOw9bHYwa9XPUjzaFnh0`);
//       fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${location.location}&destinations=${locations[index+1].location}&key=AIzaSyDs3ljSEnfR3nRHOw9bHYwa9XPUjzaFnh0`)
//       .then((distance) => console.log('DISTANCE!', distance))
//       .then((res) => {console.log(locations[index+1], location, res)})
//     }
//   })
// }

export const axiosInfo = {headers:{"Content-Type": "application/json; charset=UTF-8",
                                   "Access-Control-Allow-Origin":"*",
                                   "Access-Control-Allow-Methods": "POST",},
                          mode: "cors"}
//
export const fetchInfo = {method: "get",
                          status: "200",
                          headers: {"Access-Control-Allow-Origin":"*"}}

// export const locationDistances = (locations) => {
//     axios({
//        method : 'GET',
//        url : `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${location.location}&destinations=${locations[index+1].location}&key=AIzaSyDs3ljSEnfR3nRHOw9bHYwa9XPUjzaFnh0`,
//        headers: {
//          "Access-Control-Allow-Origin": '*',
//          "Access-Control-Allow-Methods": 'GET',
//       },
//         })
//         .then(function (response) {
//         console.log('RESPONSE', response);
//       })
//         .catch(function (error) {
//         console.log(error);
//       });
//     }
