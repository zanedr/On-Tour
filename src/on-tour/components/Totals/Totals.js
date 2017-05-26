import React, { Component } from 'react'
import { HeaderCard } from '../Cards/HeaderCard'
import { GigCard } from '../Cards/GigCard'

export default class Totals extends Component {
  constructor(props) {
    super(props)
  }

  distanceTotal(stuff) {
    return parseInt(stuff.reduce((distanceAcc, gig) => {
      return distanceAcc + gig.distance_from_last
    }, 0), 10)
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
          <h6 className="totals-card-mpg total">{this.props.MPG}</h6>
          <h6 className="totals-card-dates total">{this.props.Locations.length}</h6>
          <h6 className="totals-card-distance total">{this.distanceTotal(this.props.Locations)} miles</h6>
          <h6 className="totals-card-cost total">cost</h6>
          <h6 className="totals-card-print total"><img className = "print-icon" src="" /></h6>
        </div>
      </div>
    )
  }
}
