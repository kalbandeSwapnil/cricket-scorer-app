import React from 'react';
import {connect} from 'react-redux';


 export const TeamScore = (props) => {
     let isBold = true;
        return (
            <div className="teamName-container" >
                <div className="team1-container" style={MainViewStyle}>
                    <div className="teamName" style={TeamRunStyle}>
                    <div style ={isBold ? teamBoldStyle : teamNormalStyle}>{props.team1.teamName}</div>
                    </div>
                    <div style={OverViewStyle}>
                    <div className="teamScore" style ={isBold ? scoreBoldStyle : scoreNormalStyle}>{props.team1.runs}/{props.team1.wickets}</div>
                    <div className="inStatic" style ={isBold ? teamBoldStyle : teamNormalStyle}> in </div>
                        <div className="currentBallAndOver" style={isBold ? scoreBoldStyle : scoreNormalStyle}>
                            {props.team1.currentOver + '.'}{props.team1.currentBall + '/'}{props.team1.totalOver}
                        </div>
                    </div>
                </div>

                <div className="team2-container" style={MainViewStyle}>
                    <div className="teamName" style={TeamRunStyle}>
                        <div style ={isBold ? teamBoldStyle : teamNormalStyle}>{props.team2.teamName}</div>
                    </div>
                    <div style={OverViewStyle}>
                        <div className="teamScore" style ={isBold ? scoreBoldStyle : scoreNormalStyle}>{props.team2.runs}/{props.team2.wickets}</div>
                        <div className="inStatic" style ={isBold ? teamBoldStyle : teamNormalStyle}> in </div>
                        <div className="currentBallAndOver" style={isBold ? scoreBoldStyle : scoreNormalStyle}>
                            {props.team2.currentOver + '.'}{props.team2.currentBall + '/'}{props.team2.totalOver}
                        </div>
                    </div>
                </div>
            </div>
        )
}

export const mapStateToProps = (state) => {
    return {
        team1 : state.teamScore.team1,
        team2 : state.teamScore.team2
    }
}

export const  mapDispatchToProps = (dispatch) => {
    return {
    }
}

export const TeamScoreContainer =  connect(mapStateToProps, mapDispatchToProps)(TeamScore);

const teamBoldStyle = {
    fontWeight: 'bold',
    fontSize: '25px',
    color: 'black',
    padding: 3,
    justifyContent: 'flex-start'
};


const teamNormalStyle = {
    fontWeight: 'normal',
    fontSize: '25px',
    color: 'black',
    padding: 3,
    justifyContent: 'flex-start'


};


const scoreBoldStyle = {
    fontWeight: 'bold',
    fontSize: '25px',
    color: 'black',
    padding: 3,
    justifyContent: 'flex-end'
};


const scoreNormalStyle = {
    fontWeight: 'normal',
    fontSize: '25px',
    color: 'black',
    padding: 3,
    justifyContent: 'flex-end'


};

const MainViewStyle = {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between'

};

const OverViewStyle = {
    flexDirection: 'row',
    display: 'flex',

};
const TeamRunStyle = {
    flexDirection: 'row',
    display: 'flex',

};