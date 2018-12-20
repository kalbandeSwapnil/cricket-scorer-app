import React from 'react'
import './Stats.css'
import  {TeamScoreContainer} from '../scoreBoard/TeamScore'
import { Link } from 'react-router-dom'
import { BowlingScoreContainer } from '../Score/ScoreTable'
import {connect} from 'react-redux';



class Stats extends React.Component {
    render () {
        return (
            <div className="container">
                <TeamScoreContainer />
                <div className="button-stats"><Link to="/">Home</Link></div>
                <BowlingScoreContainer isBattingScore ={false}/>

            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    if(state.teamScore.team1.isBatting){
        return {
        
            team1 : state.teamScore.team1,
            team2 : state.teamScore.team2
        }
    }
    else{
        return {
        
            team1 : state.teamScore.team2,
            team2 : state.teamScore.team1
        }
    }
}



export default connect(mapStateToProps, null) (Stats)
