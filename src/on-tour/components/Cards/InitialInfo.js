import React from 'react'

export const InitialInfo = (dispatcher) => {
  let mpg = '';
  let location = '';

  return (
    <div id='initial-box'>
      <h3 className="initial-box-text">Let's get this thing rolling</h3>
      <input className="intial-inputs" onChange={(e) => {location = e.target.value}} placeholder="Starting location" type="text" />
      <h4 className="initial-box-text">What's the MPG of the tour vehicle? Keep in mind people and equipment will lower the average.</h4>
      <input className="intial-inputs" onChange={(e) => {mpg = e.target.value}} placeholder="MPG" type="text" />
      <input className="intial-inputs" placeholder="Here we go" type="submit" onClick = {(e) => {dispatcher(location, mpg)}}/>
    </div>
  )
}
