import React, { Component } from 'react';
import {changeName} from './PlayerActions'
import {connect} from 'react-redux';


class CricketGame extends Component {

    changeName () {
        console.log("***********")
        this.props.changeName();
    }

    render() {
        return (
        <div className="cricket-game">
            <h1>Hello{this.props.lastName}</h1>
            <button onClick = {this.changeName.bind(this)}> Change </button>
        </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
            name: state.playerReducer.lastName
          }
    }
    
export const  mapDispatchToProps = (dispatch) => {
        return {
            changeName : changeName(dispatch)
          }
    }  

export default connect(mapStateToProps, mapDispatchToProps)(CricketGame);