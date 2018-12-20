import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import  './PlayingBatsman.css'


export const PlayingBatsman = (props) => {

    return {

    }


}


OverStatus.protoTypes = {
    Balls: PropTypes.arrayOf(PropTypes.object).isRequired,
}



// OverStatus Container
const mapStateToProps = (state) => {
    const overs = state.teamScore.team1.overs
    let newOver = overs[overs.length - 1]
    let ballsLength = newOver && newOver.length
    return {
        currentOver: overs[overs.length - 1],
        balls : ballsLength,
        bowlingTeam : state.teamScore.team1.isBowling ? state.teamScore.team1 : state.teamScore.team2
    }
}

const mapDispatchToProps = (state) => {
    return {

    }
}

export const OverStatusContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)