import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import MapContainer from './MapContainer'

export default class MapHolder extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div id='map'>
      <MapContainer
      mapElement={ <div className='mapElement' /> }
      containerElement={ <div className='containerElement'/> }
      
      />
    </div>
  )
  }
}

//AIzaSyDs3ljSEnfR3nRHOw9bHYwa9XPUjzaFnh0
