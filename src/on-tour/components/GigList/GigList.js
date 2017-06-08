import React, { Component } from 'react'
import { HeaderCard } from '../Cards/HeaderCard'
import { GigCard } from '../Cards/GigCard'
import { AddGig } from '../Cards/AddGig'
import AddGigInfoContainer from '../AddGigInfo/AddGigInfoContainer'


export default class GigList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addGig: false,
      deleteGigHolder: {},
    }
  }

  selectGig(gig) {
    this.props.selectGig(gig)
  }

  setAddGig() {
    this.setState({addGig: true})
  }

  exitAddGig() {
    this.setState({addGig: false})
  }

  toggleDelete(gig) {
    this.setState({deleteGigHolder: gig})
  }

  deleteGig() {
    if(this.state.deleteGigHolder.location) {
      this.props.selectGig(this.state.deleteGigHolder)
      return (
        <div className="gig-card-ask-delete">
          <h6 className="gig-card-ask-delete-text">
            Are you sure you want to delete this gig?
          </h6>
          <div className="gig-card-ask-delete-buttons">
            <button className="gig-delete-actual-buttons"
                    onClick={() => this.confirmDelete()}>Yes</button>
            <button className="gig-delete-actual-buttons"
                    onClick={() => this.doNotDelete()}>No</button>
          </div>
        </div>
      )
    }
  }

  doNotDelete() {
    this.setState({deleteGigHolder: {}})
  }

  confirmDelete() {
    this.props.deleteGig(this.state.deleteGigHolder)
    this.props.clearSelectGig({})
    this.props.handleSetCheck(false)
    this.setState({deleteGigHolder: {}})
  }

  addGigInfo() {
    if(this.state.addGig) {
      return (
        <AddGigInfoContainer exit={this.exitAddGig.bind(this)}/>
      )
    }
  }

  render() {
    return (
      <div id="giglist">
        {HeaderCard(["Location",
                     "Venue",
                     "Distance from last",
                     "Cost from last"])}
        {this.props.Locations.map((val, index) => {
          return(<GigCard editGig={this.selectGig.bind(this)}
                          key={index}
                          index={index}
                          deleteGig={this.toggleDelete.bind(this)}
                          {...val} />)
        })}
        <AddGig addLocation={this.setAddGig.bind(this)} />
        {this.addGigInfo()}
        {this.deleteGig()}
      </div>
    )
  }
}
