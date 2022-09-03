import React, { Component } from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';

import './App.css';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: null
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      }
    })
  }

  OnPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    const { showRandomPlanet } = this.state;
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

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList OnItemSelected={this.OnPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

      </div >
    )
  }
};