import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


const Map = withGoogleMap((props) => {

  let mapCenter = { lat: 40 , lng: -97 }
  let zoomIndex = 4
  const gigLocations = props.Locations.map((location, index) => {
    return location.location
  })
  console.log('HEYHEY', gigLocations);
  // if( searchResults.length !== 0){
  //   const sortedSearch = searchResults.sort( (venueA, venueB) => {
  //     return venueB.cityVenues.length - venueA.cityVenues.length
  //   })
  //   zoomIndex = 7
  //   mapCenter = {lat:sortedSearch[0].Latitude , lng: sortedSearch[0].Longitude }
  // };
  //
  // const venuePins = Object.keys(venueCount).map((location, index) => {
  //   const pin = Object.keys(venueCount[location]).map((city, i) => {
  //     let cityInfo = venueCount[location][city]
  //     let Latitude = cityInfo.lat
  //     let Longitude = cityInfo.long
  //     if(Latitude !== '' && Longitude !== ''){
  //     return <Marker
  //               key={i}
  //               position={{lat: Latitude , lng: Longitude}}
  //               label={cityInfo.count.toString()}
  //               onClick={() => searchFromMap(location, city)}
  //             />
  //     } else {
  //       return null
  //     }
  //   })
  //   return pin
  // })

  // <InfoWindow onCloseClick={()=> clickInfoBox(claim)}>
  //                   <div>
  //                     <div>{sightings[claim].summary}</div>
  //                     <a href={sightings[claim].url} target='_blank'>{'Read More'}</a>
  //                 </div>
  //                 </InfoWindow>

  return (
    <div id='map-container'>
    <GoogleMap
      zoom={zoomIndex}
      center={mapCenter}>
    </GoogleMap>
  </div>
  )
})

export default Map
