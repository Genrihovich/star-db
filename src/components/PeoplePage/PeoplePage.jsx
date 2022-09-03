import React, { Component } from 'react'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import ItemList from '../ItemList/ItemList'
import PersonDetails from '../PersonDetails/PersonDetails'

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 3,
        hasError: false
    }
    componentDidCatch(error, info) {
        //   debugger;

        this.setState({
            hasError: true
        })
    }

    OnPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }


    render() {
        if (this.state.hasError) { return <ErrorIndicator /> }
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList OnItemSelected={this.OnPersonSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        )
    }
}

