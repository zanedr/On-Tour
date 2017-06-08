import React, { Component } from 'react'
import { HeaderCard } from '../Cards/HeaderCard'
import { GigCard } from '../Cards/GigCard'
import { gasFetch, adjustDistance } from '../../helpers/helpers'

export default class Totals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMPG: false,
      mpg: '',
      totalMiles: 0,
      totalCost: 0,
      check: false,
      updatedLocations: {}
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

  updateLocations() {
    const { Locations } = this.props
    const distanceMap = Locations.map((location, index) => {
      if(Locations[index+1]) {
        return adjustDistance(location.location, Locations[index+1].location)
      }
    })
    Promise.all(distanceMap).then(distances => {
        this.props.handleUpdateGigList(this.updateLocationMap(distances))
        this.props.handleSetCheck(true)
        this.setState({totalMiles: this.totalMiles(this.updateLocationMap(distances)),
                       totalCost: this.calculateTotalCost(this.updateLocationMap(distances)),
                       check: true})
    })
  }

  updateLocationMap(distances) {
    const { Locations } = this.props
    return Locations.map((updateLocation, i) => {
      if(i === 0) {
        updateLocation.distance_from_last = 0
        updateLocation.cost_from_last = 0
        return updateLocation
      }
      else if(Locations[i - 1] && updateLocation)  {
        updateLocation.distance_from_last = parseInt(distances[i - 1]).toFixed(2)
        console.log('UPDATES: DISTANCE', distances[i-1], 'MPG', this.props.MPG, 'GAS', updateLocation.gasPrice);
        updateLocation.cost_from_last = (parseInt(distances[i - 1]) / this.props.MPG * updateLocation.gasPrice).toFixed(2)
        return updateLocation
      }
    })
  }

  totalMiles(locationArray) {
    const totalMiles = parseInt(locationArray.reduce((distanceAcc, gig) => {
        return distanceAcc + parseInt(gig.distance_from_last)
      }, 0), 10)
    return totalMiles.toFixed(2)
  }

  calculateTotalCost(locationArray) {
    const totalCost = parseInt(locationArray.reduce((distanceAcc, gig) => {
          return distanceAcc + parseInt(gig.cost_from_last)
        }, 0), 10)
    return totalCost.toFixed(2)
  }

//   render() {
//     return (
//         <div>
//           <div id="totals">
//             <div  id="totals-calculate-again"
//                   onClick={() => this.updateTotals()}>
//                   Click to Calculate
//             </div>
//             <div className="totals-labels">
//               <h6 className="totals-labels-mpg total-label">MPG</h6>
//               <h6 className="totals-labels-dates total-label">Total Shows</h6>
//               <h6 className="totals-labels-distance total-label">Total Distance</h6>
//               <h6 className="totals-labels-cost total-label">Gas Cost</h6>
//               <h6 className="totals-labels-print total-label">Print</h6>
//             </div>
//             <div className="totals-card">
//               {this.editMPG()}
//               <h6 className="totals-card-mpg total" onClick={() => this.toggleMPGEdit()}>{this.props.MPG}</h6>
//               <h6 className="totals-card-dates total">{this.props.Locations.length}</h6>
//               <h6 className="totals-card-distance total">{this.state.totalMiles} miles</h6>
//               <h6 className="total totals-card-cost">${this.state.totalCost}</h6>
//               <h6 className="totals-card-print total"><img className = "print-icon" src="" /></h6>
//             </div>
//         </div>
//       </div>
//     )
//   }
// }

  render() {
    if(this.props.Check === false){
      return (
        <div id="totals">
          <div  id="totals-calculate"
                onClick={() => this.updateLocations()}>
                Click to Calculate
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <div id='totals'>
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
              <h6 className="total totals-card-cost">${this.state.totalCost}</h6>
              <h6 className="totals-card-print total"><img className = "print-icon" src="" /></h6>
            </div>
          </div>
        </div>
      )
    }
  }
}
