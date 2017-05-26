import React from 'react'

export const InitialInfo = (dispatcher) => {
  let mpg = '';
  let location = '';
  let error = '';

  const check = (location, mpg) => {
    mpg = parseInt(mpg)
    if (!mpg) {
      alert('MPG must numbers only')
    } else {
      dispatcher({index: 0,
                  location: location,
                  venue: 'Home',
                  distance_from_last: '5',
                  cost_from_last: '$0.00',
                  notes: ''},
                  mpg)
      }
    }

  return (
    <div id='initial-box'>
      <h3 className="initial-box-text">Let's get this thing rolling</h3>
      <input className="intial-inputs" onChange={(e) => {location = e.target.value}} placeholder="Starting location" type="text" />
      <h4 className="initial-box-text">What's the MPG of the tour vehicle? Keep in mind people and equipment will lower the average.</h4>
      <input className="intial-inputs" onChange={(e) => {mpg = e.target.value}} placeholder="MPG" type="text" />
      <p className='initial-p'>If MPG is left blank calculations will not work. Make a guess. You can always update it later.</p>
      <p className='initial-p initial-p-link'><a className="initial-p-link" href="https://www.fueleconomy.gov/feg/findacar.shtml" target='_blank'>Alternatively, you can search for your vehicle by clicking here.</a></p>
      <input className="intial-inputs" placeholder="Here we go" type="submit" onClick = {(e) => {check(location, mpg)}}/>
    </div>
  )
}
