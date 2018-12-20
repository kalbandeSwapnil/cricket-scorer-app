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
            ballDescription = ball['runs'] + ball['extras'].type + ' '
        }
        else if(ball['extras'].type) {
            ballDescription = ball['extras'].type + ' '
        }
        else {
            ballDescription = ball['runs']  + ' '
        }
        overHistory.push(ballDescription)});
        
    return (
        <div className="overStatus-container">
            <div className="overStatus-main">
                <div>This Over</div>
                <div className="over-history">{overHistory}</div>
            </div>
            <div>
                <b className ="bowler-name"> Bowler : {props.currentOver && props.currentOver.length ?
                    props.currentOver[0].bowlerName : ''}</b>
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
        balls : ballsLength
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