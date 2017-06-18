import React from 'react';
import PropTypes from 'prop-types';

const UsersListComponent = ({usersData}) => {
    return (
        <div>
            <h2>Users</h2>
            {usersData.map(singleUser)}
        </div>
    )
};

const singleUser = (userData) => {
    const { name, location, email, dob, registered, phone, cell, nat, id, picture} = userData;
    const cardStyle = { textAlign: 'left', border: '1px black solid', padding: 5, boxSizing: 'border-box', margin: 5 };
    const titleStyle = { textAlign: 'center'};
    const imageContainer = { width: '100%', textAlign: 'center' };
    return (
        <div style={cardStyle} key={id.value}>
            <div style={imageContainer}>
                <a href={picture.large} target="_blank" rel="noopener noreferrer">
                    <img alt="user-thumbnail" src={picture.thumbnail} width="50" height="50" />
                </a>
            </div>
            <h3 style={titleStyle}>{`${name.title || ''} ${name.first || ''} ${name.last || ''} `}</h3>
            <p>{`Location: ${location.street || ''}, ${location.city || ''}, ${location.state || ''}, ${location.postCode || ''}`}</p>
            <p>{`Email: ${email || ''}`}</p>
            <p>{`Birth date: ${dob || ''}`}</p>
            <p>{`Registered: ${registered || ''}`}</p>
            <p>{`Phone: ${phone || ''}`}</p>
            <p>{`Cell: ${cell || ''}`}</p>
            <p>{`Nationality: ${nat || ''}`}</p>
        </div>
    )
};

export default UsersListComponent;

UsersListComponent.propTypes = {
    usersData: PropTypes.arrayOf(PropTypes.object).isRequired,
};