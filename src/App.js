import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ball from './components/Ball';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ball />
      </div>
    );
  }
}

export default App;
