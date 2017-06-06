import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import TotalsContainer from './TotalsContainer'
import Totals from './Totals'
import sinon from 'sinon'

describe('totals testing', () => {

let locations = [{location: 'Mt. Doom, CO',
                                            venue: 'Big Ernie\'s Pizza',
                                            index: 5,
                                            order: 6,
                                            notes: 'yup, thats a note',
                                            distance_from_last: '20 miles',
                                            cost_from_last: '$1.00'}]

let mockStore = configureStore()({Locations: locations,
                                   Check: locations,
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

    const Container = mount(<Provider store={mockStore}><TotalsContainer /></Provider>);
    const Component = Container.find(Totals)

    return {
      Container,
      Component
    }
  }

  it('totals should have section for mpg, label and value', () => {
    const { Container, Component } = setup()
    console.log('COMPONENT', Component.debug());

    const mpglabel = Component.find('.totals-labels-mpg')
    const mpg = Component.find('.totals-card-mpg')

    expect(mpglabel.length).toEqual(1)
    expect(mpg.length).toEqual(1)
  })

  it('when mpg is clicked it should bring up an edit box', () => {
    const { Container, Component } = setup()

    const mpg = Component.find('.totals-card-mpg')
    mpg.simulate('click')

    const mpgedit = Component.find('.mpg-edit-container')
    expect(mpgedit.length).toEqual(1)
  })

  it('totals should have section for number of dates, label and value', () => {
    const { Container, Component } = setup()

    const dateslabel = Component.find('.totals-labels-dates')
    const dates = Component.find('.totals-card-dates')

    expect(dateslabel.length).toEqual(1)
    expect(dates.length).toEqual(1)
  })

  it('totals should have section for total cost, label and value', () => {
    const { Container, Component } = setup()

    const costlabel = Component.find('.totals-labels-cost')
    const cost = Component.find('.totals-card-cost')

    expect(costlabel.length).toEqual(1)
    expect(cost.length).toEqual(1)
  })

  it('totals should have section for total distance, label and value', () => {
    const { Container, Component } = setup()

    const distancelabel = Component.find('.totals-labels-distance')
    const distance = Component.find('.totals-card-distance')

    expect(distancelabel.length).toEqual(1)
    expect(distance.length).toEqual(1)
  })
})
