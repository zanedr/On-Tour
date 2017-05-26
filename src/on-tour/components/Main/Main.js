import React, { Component } from 'react';
import GigListContainer from '../GigList/GigListContainer'
import TotalsContainer from '../Totals/TotalsContainer'
import MapContainer from '../Map/MapContainer'
import NotesContainer from '../Notes/NotesContainer'

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
          <MapContainer />
          <NotesContainer />
          <TotalsContainer />
        </div>
      </div>
    )
  }
}
