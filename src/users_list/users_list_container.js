// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Constants
import { PENDING, FULFILLED, REJECTED } from './constants'

// Components
import UsersListComponent from './users_list_component';


class UsersList extends Component {

    render () {
        const { status } = this.props.usersList;
        switch (status) {
            case PENDING:
                return <h2>Fetching Data...</h2>;
            case REJECTED:
                return <h2>A problem occurred, try again later please.</h2>;
            case FULFILLED:
                return (
                    <div>
                        <UsersListComponent usersData={this.props.usersList.data} />
                    </div>
                );
            default:
                return <h2>Click the button to load users's data!</h2>
        }
    }
}

function mapStateToProps (state) {
    return ({ usersList: state.usersList });
}

export default connect(mapStateToProps, null)(UsersList);