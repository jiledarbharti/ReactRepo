import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormContainer from './containers/FormContainer';

class App extends Component {
  render() {
    return (
      <div>
      <div >
        <h3> Register New User</h3>
        <FormContainer />
      </div>
     </div>
    );
  }
}

export default App;
