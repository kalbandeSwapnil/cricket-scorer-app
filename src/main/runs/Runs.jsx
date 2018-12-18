import React, { Component } from 'react';
import {actions} from  './RunsActions'
import {connect} from 'react-redux';
import {ButtonToolbar } from 'react-bootstrap'
import { Button } from 'react-bootstrap';

class Runs extends Component {
    constructor(props){
        super(props);
        this.state ={
            currentRun : 0
        }
    }

    storeRun(run){
        debugger;
        this.setState({
            currentRun : parseInt(run.target.value)
        })
    }

    render() {
        let runs = [];
        for(let index =0 ;index< 8; index++){
            runs.push(
                <button className="button-number" value ={index} onClick = {this.storeRun.bind(this)}>{index}</button>
            )
        }
       return (
           <div className="runs">

               {runs}
               <br></br>
               <button className="button-next"  onClick = {() => this.props.recordRuns(this.state.currentRun)}>Next Ball</button>
           </div>
       )
    }
}

export const mapStateToProps = (state) => {
    return {
        lastName: state.playerReducer.lastName
    }
}

export const  mapDispatchToProps = (dispatch) => {
    return {
        recordRuns : function(run) {
            dispatch(actions.recordRuns(run))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs);