import React, { Component } from 'react';
import {actions} from  './RunsActions'
import {connect} from 'react-redux';

class Runs extends Component {
    constructor(props){
        super(props);
        this.state ={
            currentRun : 0,
            bowlIndex : 0
        }
    }

    storeRun(run) {
        debugger;
        this.setState({
            currentRun: parseInt(run.target.value)
        })
        if (this.state.bowlIndex < 6) {
            this.setState({
                bowlIndex: this.state.bowlIndex + 1
            })
        } else {
            this.setState({
                bowlIndex: 0
            })
        }
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
               <button className="button-next"  onClick = {() => {
                   this.props.recordRuns(this.state.currentRun)
                   this.props.recordBalls("Swapnil", this.state.bowlIndex)
               }}>
                   Next Ball
               </button>
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
        },
        recordBalls : function(name, bowlIndex) {
            dispatch(actions.recordBalls(name, bowlIndex))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs);