import React, { Component } from 'react'
import EditGigInfoContainer from '../EditGigInfo/EditGigInfoContainer'
import { notesNotes } from './notesNotes'

export default class Notes extends Component {
  constructor(props){
    super(props)
    this.state = {
      editGig: false,
      tempNotes: '',
    }
  }

  setEditGig() {
    if(this.props.gig.location) {
      this.setState({editGig: true})
    }
  }

  exitEditGig() {
    this.setState({editGig: false})
  }

  editGigInfo() {
    if(this.state.editGig == true) {
      return (
        <EditGigInfoContainer marker={this.props.gig.index} exit={this.exitEditGig.bind(this)}/>
      )
    }
  }

  gigInfo() {
    return this.props.gig.location ?
      `from ${this.props.gig.venue} in ${this.props.gig.location}`
      : ''
  }

  gigNotes() {
      return (
        <div className="gig-notes">{this.props.gig.notes}</div>
      )
  }

  render() {
    return (
      <div id="note-card">
        <div id="notes-header">
          <h5 className = "note-list">Notes {this.gigInfo()}</h5>
          <button className = "note-button" onClick = {() => this.setEditGig()}>Edit</button>
        </div>
        <div id="notes-editor">
          {this.gigNotes()}
        </div>
        {this.editGigInfo()}
      </div>
    )
  }
}
