import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard onKeyPress={() => console.log('asd')} />
      </div>
    );
  }
}

export default App;
