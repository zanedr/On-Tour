import React, { Component } from 'react'

export default class AddGigInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      possibleLocation: {},
      venue: '',
      notes: '',
      milage: '',
      askLocationPopUp: false,
    }
  }

  queryLocation() {
    this.state.askLocationPopUp = true
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&key=AIzaSyDs3ljSEnfR3nRHOw9bHYwa9XPUjzaFnh0`)
    .then(answer => answer.json())
    .then((res) => {
      this.setState({possibleLocation: res})
    })
  }

  addGig(located) {
    let card = {index: this.props.Locations.length,
                order: this.props.Locations.length + 1,
                location: located,
                venue: this.state.venue,
                distance_from_last: "",
                cost_from_last: "",
                notes: this.state.notes}
    this.props.handleAddLocation(card)
    this.props.exit()
  }

  render() {
    if(!this.state.askLocationPopUp) {
      return (
        <article className="add-gig-info">
          <button className="add-gig-info-exit" onClick={() => {this.props.exit()}}>&times;</button>
          <h3 className="add-gig-info-title">Add Gig</h3>
          <input className="add-gig-info-input add-gig-info-location"
                 type='text'
                 placeholder='Location'
                 onChange={(e) => this.setState({location: e.target.value})}/>
          <input className="add-gig-info-input add-gig-info-venue"
                 type='text'
                 placeholder='Venue'
                 onChange={(e) => this.setState({venue: e.target.value})}/>
          <textarea cols="10"
                  className="add-gig-info-input add-gig-info-notes"
                  placeholder='Notes' onChange={(e) => this.setState({notes: e.target.value})}/>
          <input className="add-gig-info-save"
                 type='submit'
                 placeholder='Save'
                 onClick={() => this.queryLocation()} />
        </article>
      )
    }
    else {
      return (
        <div className="ask-location-container">
          <button className="ask-location-exit" onClick={() => {this.setState({askLocationPopUp: false})}}>Back</button>
          <h6 className="ask-location-text">Confirm Location</h6>
          <p className='ask-location-option-text'>{this.state.possibleLocation.results[0].formatted_address}</p>
          <input className="ask-location-submit"
            value="That's the one!"
            type="submit"
            onClick={() => this.addGig(this.state.possibleLocation.results[0].formatted_address)} />
        </div>
      )
    }
  }
}
