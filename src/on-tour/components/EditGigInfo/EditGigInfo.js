import React, { Component } from 'react'
import { fetchHelper, adjustDistance, gasFetch } from '../../helpers/helpers'

export default class EditGigInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: this.props.SelectedGig.location,
      possibleLocation: {},
      venue: this.props.SelectedGig.venue,
      notes: this.props.SelectedGig.notes,
      order: this.props.SelectedGig.order,
      askLocationPopUp: false,
    }
  }

  editGigNewLocation(located) {
    const { Locations } = this.props
    gasFetch(located.formatted_address.slice(-7, -5)).then((price) => {
      const gig = {index: this.props.SelectedGig.index,
                  order: this.state.order,
                  venue: this.state.venue,
                  location: located.formatted_address,
                  state: located.formatted_address.slice(-7, -5),
                  distance_from_last: "0",
                  cost_from_last: "0",
                  lat: located.geometry.location.lat,
                  lng: located.geometry.location.lng,
                  notes: this.state.notes,
                  gasPrice: price}
      this.dispatchAndExit(gig)
    })
  }

  dispatchAndExit(gig) {
    this.props.handleEditGig(gig)
    this.props.handleSelectGig(gig)
    this.props.handleSetCheck(false)
    this.props.exit()
  }

  editGigSameLocation(located) {
    let gig = {index: this.props.SelectedGig.index,
                order: this.state.order,
                venue: this.state.venue,
                location: this.props.SelectedGig.location,
                state: this.props.SelectedGig.state,
                distance_from_last: "0",
                cost_from_last: "0",
                lat: this.props.SelectedGig.lat,
                lng: this.props.SelectedGig.lng,
                notes: this.state.notes,
                gasPrice: this.props.SelectedGig.gasPrice}
    this.dispatchAndExit(gig)
  }

  queryLocation() {
    if(this.props.SelectedGig.location === this.state.location) {
      this.editGigSameLocation(this.state.location)
    }
    else {
      this.state.askLocationPopUp = true
      fetchHelper(this.state.location)
      .then((res) => {
        this.setState({possibleLocation: res})
      })
    }
  }

  render() {
    if(!this.state.askLocationPopUp) {
      return (
        <article className="edit-gig-info">
          <button className="edit-gig-info-exit"
                  onClick={() => {this.props.exit(this.state.notes)}}>&times;</button>
          <span className="edit-gig-info-order-container">
            <h3 className="edit-gig-info-title">Edit Gig</h3>
            <h6 className="edit-gig-info-order-text">Order:</h6>
            <input defaultValue={this.props.SelectedGig.order}
                   className="edit-gig-info-input edit-gig-info-order"
                   type='text'
                   placeholder='Order'
                   onChange={(e) => this.setState({order: e.target.value})}/>
          </span>
          <input defaultValue={this.props.SelectedGig.location}
                 className="edit-gig-info-input edit-gig-info-location"
                 type='text'
                 placeholder='Location'
                 onChange={(e) => this.setState({location: e.target.value})}/>
          <input defaultValue={this.props.SelectedGig.venue}
                 className="edit-gig-info-input edit-gig-info-venue"
                 type='text'
                 placeholder='Venue'
                 onChange={(e) => this.setState({venue: e.target.value})}/>
          <textarea defaultValue={this.props.SelectedGig.notes}
                    cols="10"
                    className="edit-gig-info-input edit-gig-info-notes"
                    onChange={(e) => this.setState({notes: e.target.value})}/>
          <input className="edit-gig-info-save"
                 type='submit'
                 placeholder='Save'
                 onClick={() => this.queryLocation()} />
        </article>
      )
    }
    else {
      return (
        <div className="ask-location-container ask-location-edit-gig">
          <button className="ask-location-exit"
                  onClick={() => {this.setState({askLocationPopUp: false})}}>Back</button>
          <h6 className="ask-location-text">Confirm Location</h6>
          <p className='ask-location-option-text'>
            {this.state.possibleLocation.results[0].formatted_address}
          </p>
          <input className="ask-location-submit"
            value="That's the one!"
            type="submit"
            onClick={() => this.editGigNewLocation(this.state.possibleLocation.results[0])} />
        </div>
      )
    }
  }
}
