import React, { Component } from 'react';
import './App.css';
import { OverStatusContainer } from './main/overStatus/OverStatus'
import CricketGame from './main/cricketGame/CricketGame'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <TeamScore teamName="1" score="100" wickets="6" currentOver="10" currentBall="2" totalOver="20"/> */}
        <CricketGame />
        <OverStatusContainer />
      </div>
    );
  }
}

export default App;
