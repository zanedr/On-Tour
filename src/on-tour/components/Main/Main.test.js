import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import MainContainer from './MainContainer'
import Main from './Main'
import sinon from 'sinon'

describe('Main.js testing', () => {

  it('holds four different containers to detail gigs', () => {
    const wrapper = shallow(<Main />)

    const gigsContainer = wrapper.find('GigListContainer')
    const mapsContainer = wrapper.find('MapHolderContainer')
    const notesContainer = wrapper.find('NotesContainer')
    const totalsContainer = wrapper.find('TotalsContainer')
  })
})
