import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import EditGigInfoContainer from './EditGigInfoContainer'
import EditGigInfo from './EditGigInfo'
import sinon from 'sinon'

describe('EditGigInfo testing', () => {

let mockStore = configureStore()({Locations: [],
                                   GasPrices: 2.00,
                                   MPG: 20,
                                   SelectedGig:{location: 'Mt. Doom, CO',
                                         venue: 'Big Ernie\'s Pizza',
                                         index: 5,
                                         order: 6,
                                         notes: 'yup, thats a note',
                                         distance_from_last: '20 miles',
                                         cost_from_last: '$1.00'}})
  const setup = () => {

    const Container = mount(<Provider store={mockStore}><EditGigInfoContainer /></Provider>);
    const Component = Container.find(EditGigInfo)

    return {
      Container,
      Component
    }
  }

  it('should display info regarding the currently SelectedGig', () => {
    const { Container, Component } = setup()

    const location = Component.find('.edit-gig-info-location')
    const venue = Component.find('.edit-gig-info-venue')
    const edit = Component.find('edit-gig-info')

    // expect(location.text()).toEqual('Mt. Doom. CO')
    // expect(venue.text()).toEqual('Big Ernie\'s Pizza')
  })


})
