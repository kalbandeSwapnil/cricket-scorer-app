import React, { Component } from 'react';
import './App.css';
import { OverStatusContainer } from './main/overStatus/OverStatus'
import CricketGame from './main/cricketGame/CricketGame'


class App extends Component {
  render() {
    return (
      <div className="App">
        <CricketGame />
      </div>
    );
  }
}

export default App;
