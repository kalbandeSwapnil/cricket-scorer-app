import React, { Component } from 'react';
import {actions} from './PlayerActions'
import {connect} from 'react-redux';
import  TeamScore from '../scoreBoard/TeamScore'


class CricketGame extends Component {

    changeName () {
        console.log("***********")
        this.props.changeName();
    }

    render() {
        return (
        <div className="cricket-game">
            <TeamScore teamName=" Team 1" score="100" wickets="6" currentOver="10" currentBall="2" totalOver="20"/>
            <TeamScore teamName=" Team 2" score="150" wickets="6" currentOver="0" currentBall="0" totalOver="20"/>
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