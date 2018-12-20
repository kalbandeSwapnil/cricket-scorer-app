import React from 'react';
import { connect } from 'react-redux'
import './PlayingBatsman.css'


export const PlayingBatsman = (props) => {

    return (
        <div className = "batsman">
            <b> This Ball &nbsp;</b>
            <button className= "batsman-striker">{props.battingTeam.striker.name}</button>
            <button className= "batsman-nonStriker">{props.battingTeam.nonStriker.name}</button>
        </div>
    )


}

const mapStateToProps = (state) => {
    return {
        battingTeam : state.teamScore.team1.isBatting ? state.teamScore.team1 : state.teamScore.team2
    }
}

const mapDispatchToProps = (state) => {
    return {

    }
}

export const PlayingBatsmanConatiner = connect(
    mapStateToProps,
    mapDispatchToProps)(PlayingBatsman)