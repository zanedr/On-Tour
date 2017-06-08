import React from 'react';
import './App.css';
import MainContainer from './components/Main/MainContainer'
import { TitleScreen } from './components/Cards/TitleScreen'
import InitialInfoContainer from './components/Cards/InitialInfoContainer'

export default class App extends React.Component {
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
    console.log('APP LOCATION', location);
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
      return (
        <InitialInfoContainer />
      )
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
      return (
        <InitialInfoContainer dispatcher={this.initialDispatcher.bind(this)}/>
      )
    }
  }
}
