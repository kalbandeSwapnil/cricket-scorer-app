import { createNewBall, pushOverToOverList} from '../utils/generalUtils'

let initialState = {
    team1 :{
        teamName : 'Team 1',
        runs : 0,
        wickets: 0,
        currentBall: 0 ,
        currentOver : 0,
        totalOver: 20,
        overs : [],
        isBatting : true,
        isBowling : false,
        listOfPlayers : [{
            playerId : 1,
            name : "Brett Lee"
        },{
            playerId : 2,
            name : "Zahir Khan"
        },{
            playerId : 6,
            name : "Brandon McCullum"
        },{
            playerId : 7,
            name : "Eoin Morgan"
        }],
        currentBowler : null,
        nonStriker : null,
        striker : null
    },
    team2 :{
        teamName : 'Team 2',
        runs : 150,
        wickets: 8,
        currentBall: 0 ,
        currentOver : 0,
        totalOver: 20,
        overs: [],
        isBatting : false,
        isBowling : true,
        listOfPlayers : [{
            playerId : 3,
            name : "Ricky Ponting"
        },{
            playerId : 4,
            name : "Greame Smith"
        },
        {
            playerId : 9,
            name : "Yuvraj Singh"
        }
    ],
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
            let ball = createNewBall(action.name, action.runs, action.extraType) 
            let newOverList = pushOverToOverList(ball, state[battingTeam].overs, action.ballIndex)
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
