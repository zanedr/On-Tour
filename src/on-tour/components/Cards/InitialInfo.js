import React, { Component } from 'react'
// import { AskLocation } from '../AskLocation/AskLocation'

export default class InitialInfo extends Component {
  constructor(props){
    super(props)
    const { dispatcher } = props
    this.state = {
      mpg: '',
      possibleLocation: {},
      location: '',
      error: '',
      askLocationPopUp: false
    }
  }

  submitLocation(located) {
    this.props.dispatcher({index: 0,
                          order: 1,
                          location: located,
                          venue: "Home",
                          distance_from_last: "",
                          cost_from_last: "",
                          notes: ""}, this.state.mpg)
  }

  queryLocation() {
    this.state.askLocationPopUp = true
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=AIzaSyDs3ljSEnfR3nRHOw9bHYwa9XPUjzaFnh0`)
    .then(answer => answer.json())
    .then((res) => {
      this.setState({possibleLocation: res})
    })
  }

  render() {
    if(this.state.askLocationPopUp === false) {
      return(
        <div id='initial-box'>
          <h3 className="initial-box-text">Let's get this thing rolling</h3>
          <input className="intial-inputs"
                 onChange={(e) => {this.setState({location: e.target.value})}}
                 placeholder="Starting location"
                 type="text" />
          <h4 className="initial-box-text">What's the MPG of the tour vehicle? Keep in mind people and equipment will lower the average.</h4>
          <input className="intial-inputs"
                 onChange={(e) => {this.setState({mpg: e.target.value})}}
                 placeholder="MPG" type="text" />
          <p className='initial-p'>If MPG is left blank calculations will not work. Make a guess. You can always update it later.</p>
          <p className='initial-p initial-p-link'>
            <a className="initial-p-link"
                href="https://www.fueleconomy.gov/feg/findacar.shtml"
                target='_blank'>Alternatively, you can search for your vehicle by clicking here.</a></p>
          <input className="intial-inputs"
                 placeholder="Here we go"
                 type="submit"
                 onClick = {(e) => {this.queryLocation()}}/>
        </div>
      )
    } else {
      return (
        <div className="ask-location-container">
          <button className="ask-location-exit" onClick={() => {this.setState({askLocationPopUp: false})}}>&times;</button>
          <h6 className="ask-location-text">Confirm Location</h6>
          <p className='ask-location-option-text'>{this.state.possibleLocation.results[0].formatted_address}</p>
          <input className="ask-location-submit"
            value="That's the one!"
            type="submit"
            onClick={() => this.submitLocation(this.state.possibleLocation.results[0].formatted_address)} />
        </div>
      )
    }
  }
}
