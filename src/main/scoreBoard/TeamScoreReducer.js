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
        totalOver: 2,
        overs : [],
        isBatting : true,
        isBowling : false,
        listOfPlayers: team1Players,
        currentBowler : null,
        nonStriker : team1Players[1],
        striker : team1Players[0],
        oldBowler: null,
        hasBatted: false
    },
    team2: {
        teamName: 'Pak',
        runs: 0,
        wickets: 0,
        currentBall: 0,
        currentOver: 0,
        totalOver: 2,
        overs: [],
        isBatting : false,
        isBowling : true,
        listOfPlayers: team2Players,
        currentBowler : null,
        nonStriker : team2Players[1],
        striker : team2Players[0],
        oldBowler: null,
        hasBatted: false
    }

}


export const teamScore = (state = initialState, action) => {
    let bowlingTeam  = state.team1.isBowling ? "team1" : "team2"
    let battingTeam  = state.team1.isBatting ? "team1" : "team2"
    let changeStrike = action.run ? true : false
    switch(action.type) {
        case "UPDATE_RUNS" :
            let newStateWithRuns = {
                ...state,
                [battingTeam] : {...state[battingTeam], runs: state[battingTeam].runs + action.run}
            }

             if(changeStrike === true){
                return {
                 ...newStateWithRuns,
                     [battingTeam]: {...newStateWithRuns[battingTeam], striker: newStateWithRuns[battingTeam].nonStriker , nonStriker: newStateWithRuns[battingTeam].striker }
                 }

                        }else {
                 return newStateWithRuns;
             }

        case "UPDATE_BALLS" :
            let newState = state;
            let ball = createNewBall(action.name, action.runs, action.extraType,action.wicket,action.batsmandName,action.batsmanDisplayName,action.bowlerDisplayName)
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
                    [battingTeam]: {...newState[battingTeam], wickets: newState[battingTeam].wickets+1}
                }
            }
            return newState;

            case "UPDATE_CURRENT_BOWLER" :
                    return {
                        ...state,
                        [bowlingTeam]: {...state[bowlingTeam], currentBowler: action.player }
                    }
            case "TOGGLE_TEAM":
            console.log(state.team1.wickets)
                if(!state.team1.hasBatted && state.team1.isBatting && (state.team1.currentOver === state.team1.totalOver || state.team1.wickets === 10)){
                    return {
                        ...state,
                        team1 : {...state.team1, isBatting : false, isBowling : true, hasBatted : true },
                        team2 : {...state.team2, isBatting : true , isBowling : false }
                    }
                }
                if(!state.team2.hasBatted && (state.team2.currentOver === state.team2.totalOver || state.team2.wickets === 10) ){
                    return {
                        ...state,
                        team1 : {...state.team1, isBatting : false, isBowling : true },
                        team2 : {...state.team2, isBatting : true , isBowling : false, hasBatted : true }
                    }
                }
                return {
                    ...state
                }
            default:
            return state;
    }
}
