import React, { Component } from 'react'
import { HeaderCard } from '../Cards/HeaderCard'
import { GigCard } from '../Cards/GigCard'

export default class Totals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMPG: false,
      mpg: '',
      totalMiles: 0,
    }
  }

  toggleMPGEdit() {
    this.setState({editMPG: true})
  }

  saveMPG(mpg) {
    this.props.handleSetMPG(mpg)
    this.exitMPGEdit()
  }

  exitMPGEdit() {
    this.setState({editMPG: false})
  }

  editMPG() {
    if(this.state.editMPG === true) {
      return (
        <div className="mpg-edit-container">
          <button className="add-gig-info-exit" onClick={() => {this.exitMPGEdit()}}>&times;</button>
          <h6 className="mpg-edit-text">Change MPG</h6>
          <input className="mpg-edit"
                 defaultValue={this.props.MPG}
                 type="text"
                 onChange={(e) => this.setState({mpg: e.target.value})}/>
          <input className="mpg-submit"
                 type="submit"
                 onClick={() => this.saveMPG(this.state.mpg)}/>
        </div>
      )
    }
  }

  distanceTotal() {
    let stuff = this.props.Locations
    let totalMiles = parseInt(stuff.reduce((distanceAcc, gig) => {
      return distanceAcc + gig.distance_from_last
    }, 0), 10)
    console.log('TOTAL MILES', totalMiles);
    this.setState({totalMiles: totalMiles})
  }

  calculateTotalCost() {
    if(this.state.totalMiles < 1) {
      return 'Click here'
    } else {
      return ('$' + this.state.totalMiles / this.props.MPG * this.props.GasPrices)
    }
  }

  render() {
    return (
      <div id="totals">
        <div className="totals-labels">
          <h6 className="totals-labels-mpg total-label">MPG</h6>
          <h6 className="totals-labels-dates total-label">Total Shows</h6>
          <h6 className="totals-labels-distance total-label">Total Distance</h6>
          <h6 className="totals-labels-cost total-label">Gas Cost</h6>
          <h6 className="totals-labels-print total-label">Print</h6>
        </div>
        <div className="totals-card">
          {this.editMPG()}
          <h6 className="totals-card-mpg total" onClick={() => this.toggleMPGEdit()}>{this.props.MPG}</h6>
          <h6 className="totals-card-dates total">{this.props.Locations.length}</h6>
          <h6 className="totals-card-distance total">{this.state.totalMiles} miles</h6>
          <h6 className="total totals-card-cost" onClick={() => this.distanceTotal()}>{this.calculateTotalCost()}</h6>
          <h6 className="totals-card-print total"><img className = "print-icon" src="" /></h6>
        </div>
      </div>
    )
  }
}
