import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import GigListContainer from './GigListContainer'
import GigList from './GigList'
import sinon from 'sinon'

describe('GigList testing', () => {
  const fakeData = [{location: 'Denver, CO',
                     venue: 'Cervantes',
                     index: 0,
                     order: 1,
                     notes: '',
                     distance_from_last: '20 miles',
                     cost_from_last: '$1.00'},
                    {location: 'Colorado Springs, CO',
                     venue: 'Tim\'s basement',
                     index: 1,
                     order: 2,
                     notes: '',
                     distance_from_last: '20 miles',
                     cost_from_last: '$1.00'},
                    {location: 'Bangladesh, CO',
                     venue: 'A beach',
                     index: 2,
                     order: 3,
                     notes: '',
                     distance_from_last: '20 miles',
                     cost_from_last: '$1.00'},
                    {location: 'Durango, CO',
                     venue: 'In a cave',
                     index: 3,
                     order: 4,
                     notes: '',
                     distance_from_last: '20 miles',
                     cost_from_last: '$1.00'},
                    {location: 'The Great Wall, CO',
                     venue: 'A rock',
                     index: 4,
                     order: 5,
                     notes: '',
                     distance_from_last: '20 miles',
                     cost_from_last: '$1.00'},
                    {location: 'Mt. Doom, CO',
                     venue: 'Big Ernie\'s Pizza',
                     index: 5,
                     order: 6,
                     notes: '',
                     distance_from_last: '20 miles',
                     cost_from_last: '$1.00'}
                    ]

  const mockStore = configureStore()({Locations: fakeData,
                                      GasPrices: 2.00,
                                      MPG: 20,
                                      SelectedGig:{location: 'Mt. Doom, CO',
                                                   venue: 'Big Ernie\'s Pizza',
                                                   index: 5,
                                                   order: 6,
                                                   notes: '',
                                                   distance_from_last: '20 miles',
                                                   cost_from_last: '$1.00'}})

  const setup = () => {

  const Container = mount(
    <Provider store={mockStore}>
      <GigListContainer />
    </Provider>);

  const Component = Container.find(GigList);

  return {
    Container,
    Component
  }
}

  it('has a list to hold gigs', () => {
    const { Container, Component } = setup();

    const gigList = Component.find('#giglist')
    expect(gigList.length).toEqual(1)
  })

  it('holds the same number of gigs as are in the store', () => {
    const { Container, Component } = setup();

    expect(Component.nodes[0].props.Locations.length).toEqual(6)

    const gigs = Component.find('.gig-card-overview')
    expect(gigs.length).toEqual(6)
  })
})
