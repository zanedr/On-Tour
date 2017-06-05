import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { GigCard } from './GigCard'
import { HeaderCard } from './HeaderCard'

import sinon from 'sinon'

describe('Cards testing', () => {

  it('gig card should render information for what is passed into it', () => {
    const wrapper = shallow(<GigCard location = {'Mt. Doom, CO'}
                              venue = {'Big Ernie\'s Pizza'}
                              index = {5}
                              order = {6}
                              notes = {'yup, thats a note'}
                              distance_from_last = {'20'}
                              cost_from_last = {'1.00'} />)

    const order = wrapper.find('.gig-card-number')
    const location = wrapper.find('.gig-card-location')
    const venue = wrapper.find('.gig-card-venue')
    const distance = wrapper.find('.gig-card-distance')
    const cost = wrapper.find('.gig-card-cost')

    expect(order.text()).toEqual('6.')
    expect(location.text()).toEqual('Mt. Doom, CO')
    expect(venue.text()).toEqual('Big Ernie\'s Pizza')
    expect(distance.text()).toEqual('20 miles')
    expect(cost.text()).toEqual('$1.00')
  })

  it('header card renders with four info spots', () => {
    const wrapper = shallow(<HeaderCard info={['0', '1', '2', '3']}/>)

    const headercardtext = wrapper.find('.header-card-text')

    expect(headercardtext.length).toEqual(4)
  })

})
