import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import './RandomPlanet.css';
import { Spinner } from '../Spinner/Spinner';
import PlanetView from './PlanetView';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false,
    };

    constructor() {
        super();
        this.updatePlanet();
    };

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false, error: false });
    };

    errors = () => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePlanet() {
        const id = (Math.floor(Math.random() * 25)) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.errors);
    }


    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(error || loading);//когда у нас нет ни загрузки ни ошибки

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const planetView = hasData ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {planetView}
            </div>
        )
    }
};
