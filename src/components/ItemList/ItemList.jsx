import React, { Component } from 'react';
import swapiService from '../../services/swapiService';
import { Spinner } from '../Spinner/Spinner';

import './ItemList.css';

export default class ItemList extends Component {

    swapiService = new swapiService();

    state = {
        peopleList: null,
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }

    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.OnItemSelected(id)}>
                    {name}
                </li >
            )
        })
    };

    render() {
        const { peopleList } = this.state;
        if (!peopleList) { return <Spinner /> }
        const items = this.renderItems(peopleList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
