import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import App from './App';
import InitialInfo from './components/Cards/InitialInfo'

describe('app.js and InitialInfo.js files for on-tour', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('starts with title screen', () =>{
    const wrapper = mount(<App />)
    const mainTitle = wrapper.find('h1')

    expect(wrapper.nodes[0].state.scene).toEqual('titleScreen')
  })

  it('initial info has two input containers and one submit', () =>{
    const wrapper = shallow(<InitialInfo />)

    const inputs = wrapper.find("input[type='text']")
    const submit = wrapper.find("input[type='submit']")

    expect(inputs.length).toEqual(2)
    expect(submit.length).toEqual(1)
  })
})
