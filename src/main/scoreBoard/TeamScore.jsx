import React, { Component } from 'react';


export default class TeamScore extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isBold: true,
        };

    }


    render() {
        return <div id='mainView' style={MainViewStyle}>
            <div style={TeamRunStyle}>
            <div style ={this.state.isBold ? teamBoldStyle : teamNormalStyle}>Team</div>
            <div style ={this.state.isBold ? teamBoldStyle : teamNormalStyle}>{this.props.teamName}</div>
            </div>

            <div style={OverViewStyle}>
            <div style ={this.state.isBold ? scoreBoldStyle : scoreNormalStyle}>{this.props.score}/{this.props.wickets}</div>
            <div style ={this.state.isBold ? teamBoldStyle : teamNormalStyle}> &nbsp; in &nbsp;</div>
            <div style ={this.state.isBold ? scoreBoldStyle : scoreNormalStyle}>
                {this.props.currentOver -1}.{this.props.currentBall} /{this.props.totalOver}</div>
            </div>



        </div>
    }
}

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
    margin: '20px',
    justifyContent: 'space-between',

};

const OverViewStyle = {
    flexDirection: 'row',
    display: 'flex',

};
const TeamRunStyle = {
    flexDirection: 'row',
    display: 'flex',

};