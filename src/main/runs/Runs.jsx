import React, { Component } from 'react';
import {actions} from  './RunsActions'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import './runs.css';

class Runs extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentRun : 0,
            ballIndex : 0,
            extraType: '',
            bowlerOptions : ['Brett Lee', 'Glenn McGrath', 'Shane Warne', 'Zaheer Khan', 'Anil Kumble'],
            currentBowler : null,
            oldBowler : null,
            isDropdownVisible : false
        }
        this.recordRuns = this.recordRuns.bind(this)
        this.recordBalls = this.props.recordBalls.bind(this)
        this.previousActiveButton = null
        this.previousActiveExtraButton = null
    }

    storeRun(e) {
        this.currentSelectedButton = e.target
        if(this.previousActiveButton !== null) {
            this.previousActiveButton.className = 'button-number'
        }
        this.currentSelectedButton.className = this.currentSelectedButton.className + ' active'
        this.previousActiveButton = e.target
        this.setState({
            currentRun: parseInt(e.target.value)
        })
    }

    storeExtra(e){
        this.currentSelectedExtraButton = e.target
        if(this.previousActiveExtraButton !== null) {
            this.previousActiveExtraButton.className = 'button-number'
        }
        this.currentSelectedExtraButton.className = this.currentSelectedExtraButton.className + ' active'
        this.previousActiveExtraButton = e.target

        this.setState({
            extraType: e.target.value
        })
    }

    updateBallCount(){
        this.previousActiveButton.className = 'button-number'
        this.previousActiveExtraButton.className = 'button-number'
        this.previousActiveButton = null
        this.previousActiveExtraButton = null
        if(this.state.extraType === 'B' || this.state.extraType === 'Lb' || this.state.extraType ===''){
            if (this.state.ballIndex < 6) {
                this.setState({
                    ballIndex: this.state.ballIndex + 1
                }, () => {
                    this.recordBalls(this.state.currentBowler, this.state.ballIndex, this.state.currentRun, this.state.extraType);
                    this.recordRuns(this.state.currentRun)
                    this.setState({extraType: '',})
                    if(this.state.ballIndex === 6) {
                        this.setState({
                            oldBowler : this.state.currentBowler,
                            currentBowler: null,
                            ballIndex : 0
                        })
                    }
                })
            }
        } else if(this.state.extraType === 'Wd' || this.state.extraType === 'Nb') {
            this.recordRuns(this.state.currentRun)
            this.recordBalls(this.state.currentBowler, this.state.ballIndex, this.state.currentRun, this.state.extraType);
            this.setState({extraType: '',})
        }

        this.currentSelectedButton = null
        this.currentSelectedExtraButton = null
    }

    recordRuns(){
        let runs = 0
        switch(this.state.extraType) {
            case 'B':
                runs = 0
                break;
            case 'Lb':
                runs = 0
                break;
            case 'Wd':
                runs = 1
                break;
            case 'Nb':
                runs = 1
                break;
            default:
                break;
        }
        this.setState({
            currentRun : this.state.currentRun + runs
        }, () => {
            this.props.recordRuns(this.state.currentRun)
            this.setState({
                currentRun: 0,
                extraType: ''
            })
        }
        )   

    }

    getAvailableBowlers(){
        let abc = this.state.bowlerOptions.filter(bowler => bowler !== this.state.oldBowler)
        return abc       
    }

    updateCurrentBowler(player){
        console.log(player.value)
        this.setState({
            currentBowler : player.value,
            isDropdownVisible : false
        })   
    }

    render() {
        let runs = [];
        for(let index =0 ;index< 8; index++){
            runs.push(
                <button key={index} className="button-number" value ={index} onClick = {this.storeRun.bind(this)}>{index}</button>
            )
        }
        let extras = ["Wd", "Nb", "B", "Lb"]
            let showExtras = extras.map(extra =>
            <button key={extra} className = "button-number" value ={extra} onClick = { this.storeExtra.bind(this) } > { extra }</button >
        )
        
       return (
           <div className="runs">
                <h1>Runs</h1>
                    {runs}
               <br></br>
               
                   <h1>Extra</h1>
                    {showExtras}
               <br></br>
               <button className="button-next" disabled={this.state.currentBowler === null  || this.state.ballIndex === 6? true : false}  
                onClick = {() => {this.updateBallCount()}}>
                   Next Ball
               </button>
              
               <div className="button-stats">
                    <Link to="/stats">
                        Stats
                    </Link>
                </div>

               <button className="button-next" onClick = { () => this.setState({isDropdownVisible : true})}>
                    Change Bowler
                </button>
               <p className={this.state.currentBowler === null? 'hidden': 'p'}>
                    Selected Bowler : {this.state.currentBowler}
                </p>

               
                <div className={this.state.isDropdownVisible ? 'dropdown' : 'hidden'}>
                    <Dropdown className="button-number" options={this.getAvailableBowlers()} onChange={this.updateCurrentBowler.bind(this)}
                        value={''} placeholder="Select next bowler" />
                </div>
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
        recordBalls : function(name, ballIndex, run ,extraType) {
            dispatch(actions.recordBalls(name, ballIndex, run, extraType))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs);