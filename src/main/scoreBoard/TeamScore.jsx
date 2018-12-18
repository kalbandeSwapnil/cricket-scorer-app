import React from 'react';
import * as styles from "./TeamScoreStyle";

export default class TeamScore extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isBold: true,
        };

    }


    render() {
        return <div className="teamScoreFull" style={styles.MainViewStyle}>
            <div className="teamName" style={styles.TeamRunStyle}>
            <div style ={this.state.isBold ? styles.teamBoldStyle : styles.teamNormalStyle}>{this.props.teamName}</div>
            </div>

            <div style={styles.OverViewStyle}>
            <div className="teamScore" style ={this.state.isBold ? styles.scoreBoldStyle : styles.scoreNormalStyle}>{this.props.score}/{this.props.wickets}</div>
            <div className="inStatic" style ={this.state.isBold ? styles.teamBoldStyle : styles.teamNormalStyle}> &nbsp; in &nbsp;</div>
                <div className="currentBallAndOver" style={this.state.isBold ? styles.scoreBoldStyle : styles.scoreNormalStyle}>
                    {this.props.currentOver === 0 ? this.props.currentOver : this.props.currentOver - 1 }{this.props.currentBall === 0 ? '/' : '.' + this.props.currentBall + '/'}{this.props.totalOver}</div>

            </div>



        </div>
    }
}

