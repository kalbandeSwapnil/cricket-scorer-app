import React, { Component } from 'react';
import {actions} from './PlayerActions'
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
            lastName: state.playerReducer.lastName
          }
    }
    
export const  mapDispatchToProps = (dispatch) => {
        return {
            changeName : function() {
                dispatch(actions.changeName())
            }
          }
    }  

export default connect(mapStateToProps, mapDispatchToProps)(CricketGame);