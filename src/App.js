import React, { Component } from 'react';
// import './App.css';
import OverStatus from './main/overStatus/OverStatus'
import TeamScore from './main/scoreBoard/TeamScore.jsx';
import CricketGame from './main/cricketGame/CricketGame'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <TeamScore teamName="1" score="100" wickets="6" currentOver="10" currentBall="2" totalOver="20"/> */}
        <CricketGame />
        <OverStatus />
      </div>
    );
  }
}

export default App;
