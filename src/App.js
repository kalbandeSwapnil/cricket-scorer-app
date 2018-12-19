import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Stats from './main/stats/Stats'
import CricketGame from './main/cricketGame/CricketGame'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/stats" component={Stats} />
        <Route path="/" component={CricketGame} />
      </Switch>
    );
  }
}

export default App;
