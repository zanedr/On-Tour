import React, { Component } from 'react'

export const AskLocation = (location) => {
  let presentLocation = location

  const queryLocation = () => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=AIzaSyDs3ljSEnfR3nRHOw9bHYwa9XPUjzaFnh0`)
    .then(answer => answer.json())
    .then((res) => console.log(res))
  }

  const exitAskLocation = () => {
    console.log('BLAHBLAH');
  }

  return (
    <div className="ask-location-container">
      <button className="ask-location-exit" onClick={() => {exitAskLocation()}}>&times;</button>
      <h6 className="ask-loaction-text">Confirm Location</h6>
      <input className="ask-location-edit"
        defaultValue={presentLocation}
        type="text"
        onChange={(e) => presentLocation = e.target.value}/>
      <input className="ask-location-submit"
        type="submit"
        onClick={() => this.queryLocation(presentLocation)}/>
    </div>
  )
}
