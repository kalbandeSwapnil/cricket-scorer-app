import {createNewBall, pushOverToOverList} from '../utils/generalUtils'

const team1Players = [{
    playerId: 1,
    name: "abc1"
}, {
    playerId: 2,
    name: "abc2"
}, {
    playerId: 3,
    name: "abc3"
}, {
    playerId: 4,
    name: "abc4"
}, {
    playerId: 5,
    name: "abc5"
},  {
    playerId: 6,
    name: "abc6"
}, {
    playerId: 7,
    name: "abc7"
}, {
    playerId: 8,
    name: "abc8"
}, {
    playerId: 9,
    name: "abc9"
}, {
    playerId: 10,
    name: "abc10"
}, {
    playerId: 11,
    name: "abc11"
}]

const team2Players = [{
    playerId: 21,
    name: "xyz1"
}, {
    playerId: 22,
    name: "xyz2"
}, {
    playerId: 23,
    name: "xyz3"
}, {
    playerId: 24,
    name: "xyz4"
}, {
    playerId: 25,
    name: "xyz5"
}, {
    playerId: 26,
    name: "xyz6"
}, {
    playerId: 27,
    name: "xyz7"
}, {
    playerId: 28,
    name: "xyz8"
}, {
    playerId: 29,
    name: "abc9"
}, {
    playerId: 210,
    name: "xyz10"
}, {
    playerId: 211,
    name: "xyz11"
}]
let initialState = {
    team1: {
        teamName: 'Team 1',
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
        nonStriker : null,
        striker : null
    },
    team2: {
        teamName: 'Team 2',
        runs: 150,
        wickets: 8,
        currentBall: 0,
        currentOver: 0,
        totalOver: 20,
        overs: [],
        isBatting : false,
        isBowling : true,
        listOfPlayers: team2Players,
        currentBowler : null,
        nonStriker : null,
        striker : null
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
                    [battingTeam]: {...state[battingTeam], currentOver: state[battingTeam].currentOver+1, currentBall : 0, overs : newOverList  }
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
