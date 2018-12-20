import {createNewBall, pushOverToOverList} from '../utils/generalUtils'
import {teamOnePlayers,teamTwoPlayers} from "../Constants";

const team1Players = teamOnePlayers

const team2Players = teamTwoPlayers

let initialState = {
    team1: {
        teamName: 'India',
        runs: 0,
        wickets: 0,
        currentBall: 0,
        currentOver: 0,
        totalOver: 20,
        overs : [],
        isBatting : true,
        isBowling : false,
        listOfPlayers: team1Players,
        currentBowler : null,
        nonStriker : team1Players[1],
        striker : team1Players[0],
        oldBowler: null
    },
    team2: {
        teamName: 'Pak',
        runs: 0,
        wickets: 0,
        currentBall: 0,
        currentOver: 0,
        totalOver: 20,
        overs: [],
        isBatting : false,
        isBowling : true,
        listOfPlayers: team2Players,
        currentBowler : null,
        nonStriker : team2Players[1],
        striker : team2Players[0],
        oldBowler: null
    }

}


export const teamScore = (state = initialState, action) => {
    let bowlingTeam  = state.team1.isBowling ? "team1" : "team2"
    let battingTeam  = state.team1.isBatting ? "team1" : "team2"
    switch(action.type) {
        case "UPDATE_RUNS" :
            return {
                ...state,
                [battingTeam] : {...state[battingTeam], runs: state[battingTeam].runs + action.run}
            }
        case "UPDATE_BALLS" :
            let newState = state;
            let ball = createNewBall(action.name, action.runs, action.extraType,action.wicket)
            let newOverList = pushOverToOverList(ball, state.team1.overs, action.ballIndex)

            if(action.ballIndex === 6){
                newState = {
                    ...state,
                    [battingTeam]: {...state[battingTeam], currentOver: state[battingTeam].currentOver+1, currentBall : 0, overs : newOverList },
                    [bowlingTeam]: {...state[bowlingTeam], oldBowler : state[bowlingTeam].currentBowler , currentBowler :null }
                }
            }
            else if(action.extraType === 'Lb'  || action.extraType === 'B' || action.extraType ==='') {
                newState = {
                    ...state,
                    [battingTeam]: {...state[battingTeam] , currentBall : state[battingTeam].currentBall + 1, overs : newOverList}
                }
            } else if (action.extraType === 'Wd' || action.extraType === 'Nb'){
                newState = {
                    ...state,
                    [battingTeam]: {...state[battingTeam], overs : newOverList  }
                }
            }
            if (action.wicket === true) {
                return {
                    ...newState,
                    team1: {...newState.team1, wickets: newState.team1.wickets+1}
                }
            }
            return newState;

            case "UPDATE_CURRENT_BOWLER" :
                    return {
                        ...state,
                        [bowlingTeam]: {...state[bowlingTeam], currentBowler: action.player }
                    }
        default:
            return state;
    }
}
