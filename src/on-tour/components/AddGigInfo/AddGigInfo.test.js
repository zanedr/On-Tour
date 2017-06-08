import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import AddGigInfoContainer from './AddGigInfoContainer'
import AddGigInfo from './AddGigInfo'
import sinon from 'sinon'

describe('AddGigInfo testing', () => {

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

    const Container = mount(
      <Provider store={mockStore}>
        <AddGigInfoContainer />
      </Provider>);
    const Component = Container.find(AddGigInfo)

    return {
      Container,
      Component
    }
  }

  it('should contain input fields for venue, location, and notes', () => {
    const { Container, Component } = setup()

    const location = Component.find('.add-gig-info-location')
    const venue = Component.find('.add-gig-info-venue')
    const notes = Component.find('.add-gig-info-notes')

    expect(location.length).toEqual(1)
    expect(venue.length).toEqual(1)
    expect(notes.length).toEqual(1)
  })

  it('upon hitting submit, information should be forwarded', () => {
    const { Container, Component } = setup()
    const query = sinon.spy(Component.queryLocation)


    const submit = Component.find('.add-gig-info-save')
    submit.simulate('click')
    console.log(spy.callCount);
  })
})
