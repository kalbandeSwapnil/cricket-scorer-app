import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import  './OverStatus.css'


export const OverStatus = (props) => {
    let overHistory = [];
    props.currentOver && props.currentOver.length && props.currentOver.forEach(ball => {
        let ballDescription  = ''
        if(ball['runs'] && ball['extras'].type)
        {
            ballDescription = ball['runs'] + ball['extras'].type
        }
        else if(ball['extras'].type) {
            ballDescription = ball['extras'].type
        }
        else {
            ballDescription = ball['runs']
        }
        if(ball['out'] === true) {
            ballDescription = ballDescription + 'W'
            ballDescription = ballDescription.replace('0','');
        }
        ballDescription = ballDescription + ' '

        overHistory.push(ballDescription)});
        
    return (
        <div className="overStatus-container">
            <div className="overStatus-main">
                <div>This Over</div>
                <div className="over-history">{overHistory}</div>
            </div>
            <div>
                <b className ="bowler-name"> Bowler : {(props.bowlingTeam.currentBowler ? props.bowlingTeam.currentBowler.name : '' )}</b>

            </div>
            <div>
            </div>
        </div>
    )
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
)(OverStatus)