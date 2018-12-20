import React from 'react'
import './Stats.css'
import {TeamScore} from '../scoreBoard/TeamScore'
import { Link } from 'react-router-dom'
import { BowlingScoreContainer } from '../BowlingScore/BowlingScoreTable'
import {connect} from 'react-redux';



class Stats extends React.Component {
    render () {
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
