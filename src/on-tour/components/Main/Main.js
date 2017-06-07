import React, { Component } from 'react';
import GigListContainer from '../GigList/GigListContainer'
import TotalsContainer from '../Totals/TotalsContainer'
import MapHolderContainer from '../MapHolder/MapHolderContainer'
import NotesContainer from '../Notes/NotesContainer'
import { dynamicGasPrices } from '../../helpers/helpers'

export default class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.handleSetCheck(false)
  }

  render() {
    return (
      <div id = "main">
        <div id = "main-left">
          <GigListContainer />
        </div>
        <div id = "main-right">
          <MapHolderContainer />
          <NotesContainer />
          <TotalsContainer />
        </div>
      </div>
    )
  }
}
