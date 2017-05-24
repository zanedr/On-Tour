import React, { Component } from 'react';
import GigListContainer from '../GigList/GigListContainer'
import TotalsContainer from '../Totals/TotalsContainer'
import Map from '../Map/Map'
import { Notes } from '../Notes/Notes'

export default class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id = "main">
        <div id = "main-left">
          <GigListContainer />
        </div>
        <div id = "main-right">
          <Map />
          <Notes />
          <TotalsContainer />
        </div>
      </div>
    )
  }
}
