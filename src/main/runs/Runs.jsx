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
            ballIndex : this.props.battingTeam.currentBall,
            extraType: '',
            currentBowler : this.props.bowlingTeam.currentBowler,
            oldBowler : null,
            isDropdownVisible : false,
            wicket : false
        }
        this.recordRuns = this.recordRuns.bind(this)
        this.recordBalls = this.props.recordBalls.bind(this)
        this.previousActiveButton = null
        this.previousActiveExtraButton = null
        this.outButton = null;
    }

    recordWickets(e) {
        this.outButton =e.target
        if(this.outButton.className.includes(' active')) {
            this.outButton.className = this.outButton.className.replace(' active','')
            this.setState({
                wicket: false
            }, () => {
                this.props.toggleTeams() // This will check for innings end and update the teams.
            })

        }else {
            this.outButton.className = this.outButton.className + ' active'
            this.setState({
                wicket: true
            }, () => {
                this.props.toggleTeams() // This will check for innings end and update the teams.
            })
        }

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
        if(this.previousActiveButton !== null) this.previousActiveButton.className = 'button-number'
        if(this.previousActiveExtraButton !== null) this.previousActiveExtraButton.className = 'button-number'
        if(this.outButton !== null) {
            this.outButton.className='button-number'
        }
        this.previousActiveButton = null
        this.previousActiveExtraButton = null
        
        if(this.state.extraType === 'B' || this.state.extraType === 'Lb' || this.state.extraType ===''){
            if (this.state.ballIndex < 6) {
                this.setState({
                    ballIndex: this.state.ballIndex + 1
                }, () => {
                    this.recordBalls(this.state.currentBowler, this.state.ballIndex, this.state.currentRun, this.state.extraType,this.state.wicket,this.props.battingTeam.striker.playerId,this.props.battingTeam.striker.name,this.props.bowlingTeam.currentBowler);
                    this.recordRuns(this.state.currentRun)
                    this.setState({extraType: '',wicket: false})
                    if(this.state.ballIndex === 6) {
                        this.setState({
                            oldBowler : this.state.currentBowler,
                            currentBowler: null,
                            ballIndex : 0
                        }, () => {
                            this.props.toggleTeams() // This will check for innings end and update the teams.
                        })
                    }
                })
            }
        } else if(this.state.extraType === 'Wd' || this.state.extraType === 'Nb') {
            this.recordRuns(this.state.currentRun)
            
            this.recordBalls(this.state.currentBowler, this.state.ballIndex, this.state.currentRun, this.state.extraType,this.state.wicket );
            this.setState({extraType: '',
            wicket: false})
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
        })

    }

    getAvailableBowlers(){
        let bowlers = this.getBowlers()
        let oldBowler =  this.props.bowlingTeam.oldBowler
        let oldBowlerId  = oldBowler && oldBowler.playerId
        return bowlers.filter(bowler => bowler.value !== oldBowlerId)
    }

    updateCurrentBowler(player){
        console.log("current Player", player)
        this.setState({
            currentBowler : player.value,
            isDropdownVisible : false
        }, () => {
            this.props.updateCurrentBowler(this.props.bowlingTeam.listOfPlayers.filter( p => p.playerId === player.value)[0])})   
    }

    getBowlers() {
        return this.props.bowlingTeam.listOfPlayers.map( p => {
            return {
                value : p.playerId,
                label : p.name
            }
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

        let bowlerOptions = this.getAvailableBowlers()
       return (
           <div className="runs">
                <h1>Runs</h1>
                    {runs}
               <br></br>

                   <h1>Extra</h1>
                    {showExtras}
               <br></br>
               <button key ={true} className="button-number" onClick={ this.recordWickets.bind(this)}>
                   Out
               </button>
               <br></br>
               <button className="button-next" disabled={this.props.bowlingTeam.currentBowler=== null  || this.props.bowlingTeam.currentBall === 6? true : false}
                onClick = {() => {this.updateBallCount()}}>
                   Next Ball
               </button>
               <button className="button-next" onClick = { () => this.setState({isDropdownVisible : true})}>
                    Change Bowler
                </button>
               <p className={this.props.bowlingTeam.currentBowler === null? 'hidden': 'p'}>
                    Selected Bowler : {this.props.bowlingTeam.currentBowler ? this.props.bowlingTeam.currentBowler.name : ''}
                </p>

               
                <div className={this.state.isDropdownVisible ? 'dropdown' : 'hidden'}>
                    <Dropdown className="dropdown" options={bowlerOptions} onChange={this.updateCurrentBowler.bind(this)}
                        value={''} placeholder="Select next bowler" />
                </div>
                <br/>
                <div className="button-stats">
                    <Link to="/stats">
                        <h3>Score Card</h3>
                    </Link>
                </div>
           </div>
       )
    }
}

export const mapStateToProps = (state) => {
    return {
        bowlingTeam : state.teamScore.team1.isBowling ? state.teamScore.team1 : state.teamScore.team2,
        battingTeam : state.teamScore.team1.isBatting ? state.teamScore.team1 : state.teamScore.team2
    }
}

export const  mapDispatchToProps = (dispatch) => {
    return {
        recordRuns : function(run) {
            dispatch(actions.recordRuns(run))
        },
        updateCurrentBowler : function(player) {
            dispatch(actions.updateCurrentBowler(player))
        },
        recordBalls : function(name, ballIndex, run ,extraType,wicket,batsmanName,batsmanDisplayName,bowlerDisplayName) {
            dispatch(actions.recordBalls(name, ballIndex, run, extraType, wicket,batsmanName,batsmanDisplayName,bowlerDisplayName))
        },
        toggleTeams : function (){
            dispatch(actions.toggleTeams())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs);