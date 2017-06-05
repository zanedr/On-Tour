import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import NotesContainer from './NotesContainer'
import Notes from './Notes'
import sinon from 'sinon'

describe('Notes testing', () => {

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

  const Container = mount(<Provider store={mockStore}><NotesContainer /></Provider>);

  const Component = Container.find(Notes)

  return {
    Container,
    Component
  }
}

  it('should hold notes for the SelectedGig', () => {
    const { Container, Component } = setup()

    const notes = Component.find('.gig-notes')
    expect(notes.length).toEqual(1)
    expect(notes.text()).toEqual('yup, thats a note')
  })

  it('should display information for the SelectedGig', () => {
    const { Container, Component } = setup()

    const noteHeader = Component.find('.note-list')

    expect(noteHeader.text()).toEqual("Notes from Big Ernie\'s Pizza in Mt. Doom, CO")
  })

  it('if no gig is selected, no information should be dislpayed in notes', () => {
    mockStore = configureStore()({Locations: [],
                                       GasPrices: 2.00,
                                       MPG: 20,
                                       SelectedGig:{}})
    const { Container, Component } = setup()

    const notes = Component.find('.gig-notes')
    expect(notes.length).toEqual(1)
    expect(notes.text()).toEqual('')
  })

  it('if no gig is selected, no information should be displayed in gig header', () => {
    const { Container, Component } = setup()

    const noteHeader = Component.find('.note-list')

    expect(noteHeader.text()).toEqual("Notes ")
  })
})
