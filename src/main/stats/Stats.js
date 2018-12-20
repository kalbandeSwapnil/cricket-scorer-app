import React from 'react'
import './Stats.css'
import {TeamScore} from '../scoreBoard/TeamScore'
import { Link } from 'react-router-dom'
import { BowlingScoreContainer } from '../BowlingScore/BowlingScoreTable'
import {connect} from 'react-redux';



class Stats extends React.Component {
    render () {
        // const teams ={
        //     'team1': {teamName: "Team 1", runs:100, wickets:6, currentOver:10, currentBall:2, totalOver:20},
        //     'team2': {teamName: "Team 2", runs:150, wickets:6, currentOver:2, currentBall:2, totalOver:20}
        // }
        const overList = [
            [{
                bowlerName: "Surbhi",
                extras: {type: ""},
                isExtra: false,
                out: true,
                runs: 1,

            }, {
                bowlerName: "Swapnil",
                extras: {type: ""},
                isExtra: true,
                out: false,
                runs: 1,

            }]
        ]



        return (
            <div className="container">
                <TeamScore team1={this.props.team1} team2={this.props.team2}/>
                <div className="button-stats"><Link to="/">Home</Link></div>
                <BowlingScoreContainer/>

            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        team1 : state.teamScore.team1,
        team2 : state.teamScore.team2
    }
}



export default connect(mapStateToProps, null) (Stats)
