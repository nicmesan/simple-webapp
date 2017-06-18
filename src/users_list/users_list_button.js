// Dependencies
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions

import * as actions from './actions';

export class UsersListButton extends Component {

    fetchData = () => {
        this.props.fetchData();
    };

    render () {
        return (
            <button onClick={this.fetchData}>Load Data</button>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(UsersListButton);