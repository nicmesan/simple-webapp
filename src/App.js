import React, { Component } from 'react';
import './App.css';
import UsersList from './users_list/users_list_container';
import UsersListButton from './users_list/users_list_button';

class App extends Component {

  render() {
    return (
      <div className="App">
        <UsersListButton />
        <UsersList />
      </div>
    );
  }
}

export default App;
