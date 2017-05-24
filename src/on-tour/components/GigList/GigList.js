import React, { Component } from 'react'
import { HeaderCard } from '../Cards/HeaderCard'
import { GigCard } from '../Cards/GigCard'

export default class GigList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="giglist">
        {HeaderCard(["Location", "Venue", "Distance from last", "Cost from last"])}
        {fakeData.map((val, index) => {
          return(<GigCard key={index} index={index + 1} {...val} />)
        })}
      </div>
    )
  }
}

const fakeData = [{location: 'Denver, CO',
                   venue: 'Cervantes',
                   distance_from_last: '20 miles',
                   cost_from_last: '$1.00'},
                  {location: 'Colorado Springs, CO',
                   venue: 'Tim\'s basement',
                   distance_from_last: '20 miles',
                   cost_from_last: '$1.00'},
                  {location: 'Bangladesh, CO',
                   venue: 'A beach',
                   distance_from_last: '20 miles',
                   cost_from_last: '$1.00'},
                  {location: 'Durango, CO',
                   venue: 'In a cave',
                   distance_from_last: '20 miles',
                   cost_from_last: '$1.00'},
                  {location: 'The Great Wall, CO',
                   venue: 'A rock',
                   distance_from_last: '20 miles',
                   cost_from_last: '$1.00'},
                  {location: 'Mt. Doom, CO',
                   venue: 'Big Ernie\'s Pizza',
                   distance_from_last: '20 miles',
                   cost_from_last: '$1.00'}
                  ]
