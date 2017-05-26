import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import MainContainer from './components/Main/MainContainer'
import { TitleScreen } from './components/Cards/TitleScreen'
import { InitialInfo } from './components/Cards/InitialInfo'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scene: 'titleScreen',
      currentLocation: '',
    }
  }

  nextScene(scene) {
    this.setState({scene: scene})
  }

  initialDispatcher(location, mpg) {
    this.setState({currentLocation: location})
    this.props.handleSetMPG(mpg)
    this.props.initialLocation(location)
    this.nextScene('mainPage')
  }

  titleScreen() {
    if (this.state.scene === 'titleScreen')  {
      return TitleScreen(this.nextScene.bind(this))
    }
    else if (this.state.scene === 'initialInfo') {
      return InitialInfo(this.initialDispatcher.bind(this))
    }
  }

  render() {
    if (this.state.scene === 'mainPage') {
      return (
          <MainContainer />
      )
    } else if (this.state.scene === 'titleScreen') {
      return TitleScreen(this.nextScene.bind(this))
    } else if (this.state.scene === 'initialInfo') {
      return InitialInfo(this.initialDispatcher.bind(this))
    }
  }
}
