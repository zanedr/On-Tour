import React, { Component } from 'react'

export default class EditGigInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: this.props.SelectedGig.location,
      venue: this.props.SelectedGig.venue,
      notes: this.props.SelectedGig.notes,
      order: this.props.SelectedGig.order,
    }
  }

  editGig() {
    let gig = {index: this.props.SelectedGig.index,
                order: this.state.order,
                location: this.state.location,
                venue: this.state.venue,
                distance_from_last: this.props.SelectedGig.distance_from_last,
                cost_from_last: this.props.SelectedGig.cost_from_last,
                notes: this.state.notes}
    this.props.handleEditGig(gig)
    this.props.handleSelectGig(gig)
    this.props.exit()
  }

  render() {
    return (
      <article className="edit-gig-info">
        <button className="edit-gig-info-exit" onClick={() => {this.props.exit(this.state.notes)}}>&times;</button>
        <span className="edit-gig-info-order-container">
          <h3 className="edit-gig-info-title">Edit Gig</h3>
          <h6 className="edit-gig-info-order-text">Order:</h6>
          <input defaultValue={this.props.SelectedGig.order} className="edit-gig-info-input edit-gig-info-order" type='text' placeholder='Order' onChange={(e) => this.setState({order: e.target.value})}/>
        </span>
        <input defaultValue={this.props.SelectedGig.location} className="edit-gig-info-input edit-gig-info-location" type='text' placeholder='Location' onChange={(e) => this.setState({location: e.target.value})}/>
        <input defaultValue={this.props.SelectedGig.venue} className="edit-gig-info-input edit-gig-info-venue" type='text' placeholder='Venue' onChange={(e) => this.setState({venue: e.target.value})}/>
        <textarea defaultValue={this.props.SelectedGig.notes} cols="10" className="edit-gig-info-input edit-gig-info-notes" onChange={(e) => this.setState({notes: e.target.value})}/>
        <input className="edit-gig-info-save" type='submit' placeholder='Save' onClick={() => this.editGig()} />
      </article>
    )
  }
}
