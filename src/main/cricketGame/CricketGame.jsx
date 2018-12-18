import React, { Component } from 'react';
import {changeName} from './PlayerActions'
import {connect} from 'react-redux';
import TeamScore from "../scoreBoard/TeamScore";


class CricketGame extends Component {

    changeName () {
        console.log("***********")
        this.props.changeName();
    }

    render() {
        return (
        <div className="cricket-game">
            <h1>Hello{this.props.lastName}</h1>
            <button onClick = {this.changeName.bind(this)}> Change </button>
            <TeamScore teamName="1" score="100" wickets="6" currentOver="10" currentBall="2" totalOver="20"/>
        </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
            name: state.playerReducer.lastName
          }
    }
    
export const  mapDispatchToProps = (dispatch) => {
        return {
            changeName : changeName(dispatch)
          }
    }  

export default connect(mapStateToProps, mapDispatchToProps)(CricketGame);