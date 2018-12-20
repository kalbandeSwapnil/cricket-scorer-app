import {createNewBall, pushOverToOverList} from '../utils/generalUtils'
import {teamOnePlayers,teamTwoPlayers} from "../Constants";

const team1Players = teamOnePlayers

const team2Players = teamTwoPlayers

let initialState = {
    winnerStatus: "",
    team1: {
        teamName: 'India',
        runs: 0,
        wickets: 0,
        currentBall: 0,
        currentOver: 0,
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
 const getNextBatsman =(team)=>{
    return team.listOfPlayers.filter(player => player.isBattingDone === false)[0]
 }

export const teamScore = (state = initialState, action) => {
    let bowlingTeam  = state.team1.isBowling ? "team1" : "team2"
    let battingTeam  = state.team1.isBatting ? "team1" : "team2"
    let changeStrike = action.runs%2 ? true : false

    switch(action.type) {
        case "UPDATE_RUNS" :
            return {
                ...state,
                [battingTeam] : {...state[battingTeam], runs: state[battingTeam].runs + action.run}
            }

        case "UPDATE_BALLS" :
            let newState = state;
            let ball = createNewBall(action.name, action.runs, action.extraType,action.wicket,action.batsmandName,action.batsmanDisplayName,action.bowlerDisplayName)
            let newOverList = pushOverToOverList(ball, state[battingTeam].overs, action.ballIndex)


            if(action.ballIndex === 6){
                newState = {
                    ...state,
                    [battingTeam]: {...state[battingTeam], currentOver: state[battingTeam].currentOver+1, currentBall : 0, overs : newOverList },
                    [bowlingTeam]: {...state[bowlingTeam], oldBowler : state[bowlingTeam].currentBowler , currentBowler :null }
                }
                changeStrike = true;
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
            if(changeStrike === true){
                newState = {
                    ...newState,
                    [battingTeam]: {...newState[battingTeam], striker: newState[battingTeam].nonStriker , nonStriker: newState[battingTeam].striker }
                }

            }
            if (action.wicket === true) {
                let newBatsman = getNextBatsman(state[battingTeam]);
                return {
                    ...newState,
                    [battingTeam]: {...newState[battingTeam], wickets: newState[battingTeam].wickets+1, striker : newBatsman}
                }
            }

            return newState;

            case "UPDATE_CURRENT_BOWLER" :
                    return {
                        ...state,
                        [bowlingTeam]: {...state[bowlingTeam], currentBowler: action.player }
                    }
            case "TOGGLE_TEAM":
                return {
                    ...state,
                    [battingTeam] : {...state[battingTeam], isBatting : false, isBowling : true, hasBatted:true},
                    [bowlingTeam] : {...state[bowlingTeam], isBatting : true , isBowling : false }
                }
            case "UPDATE_WINNER_STATUS":
                return {
                    ...state,
                    winnerStatus: action.status
                }
            default:
            return state;
    }
}
