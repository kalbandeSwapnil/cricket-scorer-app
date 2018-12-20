import React, { Component } from 'react';
import {connect} from 'react-redux';
import  {TeamScoreContainer} from '../scoreBoard/TeamScore'
import {OverStatusContainer} from '../overStatus/OverStatus'
import {PlayingBatsmanConatiner} from '../playingBatsman/PlayingBatsman'
import  Runs from '../runs/Runs'
import './CricketGame.css'

class CricketGame extends Component {
    render() {
        return (
        <div className="container">
                <b>{this.props.winnerStatus ? `Result is ${this.props.winnerStatus }`: '' } </b>
            <TeamScoreContainer />
            <OverStatusContainer />
            <PlayingBatsmanConatiner/>
            <Runs/>
        </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
            winnerStatus : state.teamScore.winnerStatus
          }
    }
export default connect(mapStateToProps)(CricketGame);