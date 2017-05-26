import React, { Component } from 'react'

export default class AddGigInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      venue: '',
      notes: '',
    }
  }

  addGig() {
    let card = {index: this.props.Locations.length,
                location: this.state.location,
                venue: this.state.venue,
                distance_from_last: '',
                cost_from_last: "",
                notes: this.state.notes}
    this.props.handleAddLocation(card)
    this.props.exit()
  }

  render() {

    return (
      <article className="add-gig-info">
        <button className="add-gig-info-exit" onClick={() => {this.props.exit()}}>&times;</button>
        <h3 className="add-gig-info-title">Add Gig</h3>
        <input className="add-gig-info-input add-gig-info-location" type='text' placeholder='Location' onChange={(e) => this.setState({location: e.target.value})}/>
        <input className="add-gig-info-input add-gig-info-venue" type='text' placeholder='Venue' onChange={(e) => this.setState({venue: e.target.value})}/>
        <textarea cols="10" className="add-gig-info-input add-gig-info-notes" placeholder='Notes' onChange={(e) => this.setState({notes: e.target.value})}/>
        <input className="add-gig-info-save" type='submit' placeholder='Save' onClick={() => this.addGig()} />
      </article>
    )
  }
}
