import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import { Spinner } from '../Spinner/Spinner';

import './PersonDetails.css';
import { PersonView } from './PersonView';

export default class PersonDetails extends Component {

    swapiService = new SwapiService;

    state = {
        person: null,
        loading: true
    }
    componentDidMount() {
        this.updatePerson();
    }
    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }
    updatePerson() {
        const { personId } = this.props;
        if (!personId) { return; };

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false
                })
            })
    }

    render() {
        if (!this.state.person) {
            return <span>Select a person from a list</span>
        }
        const { loading, person } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const personView = !loading ? <PersonView person={person} /> : null

        return (
            <div className="person-details card">
                {spinner}
                {personView}
            </div>
        )
    }
}