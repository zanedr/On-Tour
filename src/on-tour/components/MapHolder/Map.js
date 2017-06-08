import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: null,
    }
  }

  mapLoaded(map) {
    if(this.state.map != null) {
      console.log('mapLoaded', JSON.stringify(map.getCenter()));
      return this.setState({map: map})
    }
  }

  render() {
    const markers = this.props.Locations || []

    return (
      <GoogleMap
        ref = {this.mapLoaded.bind(this)}
        defaultZoom={4}
        defaultCenter={{ lat: 35.2226, lng: -97.4395 }}>

        {markers.map((marker, index) => {
         return <Marker
                   key={index}
                   position={{lat: marker.lat , lng: marker.lng}}
                   label={marker.location.toString()}
                 />
             })
        }

      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)

// withGoogleMap((props)
// console.log('MAPMAPMAP', props);
// let mapCenter = { lat: 40 , lng: -97 }
// let zoomIndex = 4
//
// let origin1 =  props.Location.location
// let destinationA = 'Houston, TX'
//
//
// return (
//  <div id='map-container'>
//    <GoogleMap
//      ref={props.onMapLoad}
//      defaultZoom={zoomIndex}
//      defaultCenter={mapCenter}>
//    {markerMaker(props.Locations)}
//    </GoogleMap>
//  </div>
// )
// })
//
// const markerMaker = (gigLocations) => {
// if(gigLocations > 0) {
//  return gigLocations.map((location, index) => {
//    return (
//      <Marker position = {location.location} />
//    )})
// }
// }
// var service = new google.maps.DistanceMatrixService;
//       service.getDistanceMatrix({
//         origins: [origin1],
//         destinations: [destinationA],
//         travelMode: 'DRIVING',
//         unitSystem: google.maps.UnitSystem.IMPERIAL,
//         avoidHighways: false,
//         avoidTolls: false
//       }, function(response, status) {
//         if (status !== 'OK') {
//           alert('Error was: ' + status);
//         } else {
//           var originList = response.originAddresses;
//           var destinationList = response.destinationAddresses;
//           console.log(originList, destinationList);
//         }})

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
    // return <Marker
    //           key={i}
    //           position={{lat: Latitude , lng: Longitude}}
    //           label={cityInfo.count.toString()}
    //           onClick={() => searchFromMap(location, city)}
    //         />
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
