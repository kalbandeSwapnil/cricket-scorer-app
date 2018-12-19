import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import  './OverStatus.css'

// Stub data
// const Balls = [{
//     bowlerName : "brett lee",
//     runs :  4,
//     isExtra : false,
//     out : false,
//     extras : {
//         type : null,
//         runs: 0
//     }
// },
// {
//     bowlerName : "brett lee",
//     runs :  0,
//     isExtra : false,
//     out : true,
//     extras : {
//         type : null,
//         runs: 0
// }   
// },
//     {
//         bowlerName : "brett lee",
//         runs :  0,
//         isExtra : true,
//         out : false,
//         extras : {
//             type : 'Wd',
//             runs: 1
//     }
// },
// {
//     bowlerName : "brett lee",
//     runs :  0,
//     isExtra : true,
//     out : false,
//     extras : {
//         type : 'Nb',
//         runs: 1
// }
// },
// {
//     bowlerName : "Mcgrath",
//     runs :  0,
//     isExtra : true,
//     out : false,
//     extras : {
//         type : 'B',
//         runs: 1
// }
// },
// {
//     bowlerName : "Mcgrath",
//     runs :  0,
//     isExtra : true,
//     out : false,
//     extras : {
//         type : 'Lb',
//         runs: 1
// }
// }]


// const joinBalls = (balls) => {
//     return balls
//     .map( ball => {
//         if(ball.isExtra) {
//             // Extras
//             return ball.extras.type
//         } else if(ball.out) {
//             return 'W'
//         } 
//         return ball.runs
//     })
//     .join(' ')
// }

export const OverStatus = (props) => {
    let overHistory = [];
    props.overs.currentOverPlayed.forEach(ball => {
        overHistory.push(ball['ballType'])});
    return (
        <div className="overStatus-container">
            <div className="overStatus-main">
                <div>This Over</div>
                <div className="over-history">{overHistory}</div>
            </div>
            <div>
                <b className ="bowler-name"> Bowler : {props.overs.currentOverPlayed.length ? props.overs.currentOverPlayed[0].bowler : ''}</b>
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
    return {
        overs: state.teamScore.team1.overs
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