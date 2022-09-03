import React, { Component } from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorButton from '../ErrorButton/ErrorButton';

import './App.css';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import PeoplePage from '../PeoplePage/PeoplePage';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      }
    })
  }

  render() {
    const { showRandomPlanet, hasError } = this.state;
    if (hasError) { return <ErrorIndicator /> };

    const planet = showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className='app'>
        <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <ErrorButton />

        <PeoplePage />
        <PeoplePage />
        <PeoplePage />

      </div >
    )
  }
};