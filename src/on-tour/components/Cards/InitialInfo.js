import React, { Component } from 'react'
import { fetchHelper, gasFetch, getState } from '../../helpers/helpers'

export default class InitialInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
      mpg: '0',
      possibleLocation: {},
      location: '',
      error: '',
      askLocationPopUp: false
    }
  }

  submitLocation() {
    const located = this.state.possibleLocation.results[0]
    const addState = getState(located.formatted_address)
    gasFetch(addState).then((price) => {
      this.props.dispatcher({index: 0,
                            order: 1,
                            location: located.formatted_address,
                            venue: "Home",
                            distance_from_last: "0",
                            cost_from_last: "0",
                            state: addState,
                            lat: located.geometry.location.lat,
                            lng: located.geometry.location.lng,
                            notes: "",
                            gasPrice: price}, this.state.mpg)
      this.props.handleSetCheck(false)
    })
  }

  queryLocation() {
    fetchHelper(this.state.location)
    .then((res) => {
      this.setState({possibleLocation: res,
                     askLocationPopUp: true})
    })
  }

  render() {
    if(this.state.askLocationPopUp === false) {
      return(
        <div id='initial-box'>
          <h3 className="initial-box-text">
            Let's get this thing rolling
          </h3>
          <input className="intial-inputs"
                 onChange={(e) => {this.setState({location: e.target.value})}}
                 placeholder="Starting location"
                 type="text" />
          <h4 className="initial-box-text">
            What's the MPG of the tour vehicle? Keep in mind people and equipment will lower the average.
          </h4>
          <input className="intial-inputs"
                 onChange={(e) => {this.setState({mpg: e.target.value})}}
                 placeholder="MPG"
                 type="text" />
               <p className='initial-p'>
                 If MPG is left blank calculations will display infinity. Make a guess. You can always update it later.
               </p>
          <p className='initial-p initial-p-link'>
            <a className="initial-p-link"
                href="https://www.fueleconomy.gov/feg/findacar.shtml"
                target='_blank'>
              Alternatively, you can search for your vehicle by clicking here.
            </a>
          </p>
          <input className="intial-inputs"
                 placeholder="Here we go"
                 type="submit"
                 onClick = {(e) => {this.queryLocation()}}/>
        </div>
      )
    } else {
      return (
        <div className="ask-location-container">
          <button className="ask-location-exit"
                  onClick={() => {this.setState({askLocationPopUp: false})}}>
            Back
          </button>
          <h6 className="ask-location-text">Confirm Location</h6>
          <p className='ask-location-option-text'>
            {this.state.possibleLocation.results[0].formatted_address}
          </p>
          <input className="ask-location-submit"
            value="That's the one!"
            type="submit"
            onClick={() =>
              this.submitLocation()} />
        </div>
      )
    }
  }
}
