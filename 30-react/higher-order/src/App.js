import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'
import createResource from './createResource'

class App extends Component {
  render() {
    const PeopleComponent = createResource(List, "People")
    return (
      <div className="App">
        <PeopleComponent />
      </div>
    );
  }
}


export default App;
