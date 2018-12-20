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
        isBatting : false,
        isBowling : true,
        listOfPlayers : [{
            playerId : 1,
            name : "Brett Lee"
        },{
            playerId : 2,
            name : "Zahir Khan"
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
        isBatting : true,
        isBowling : false,
        listOfPlayers : [{
            playerId : 3,
            name : "Ricky Ponting"
        },{
            playerId : 4,
            name : "Greame Smith"
        }],
        currentBowler : null,
        nonStriker : null,
        striker : null
    }

}


export const teamScore = (state = initialState, action) => {

    switch(action.type) {
        case "UPDATE_RUNS" :
            return {
                ...state,
                team1 : {...state.team1, runs: state.team1.runs + action.run}
            }
        case "UPDATE_BALLS" :
            let newState = state;
            let ball = createNewBall(action.name, action.runs, action.extraType) 
            let newOverList = pushOverToOverList(ball, state.team1.overs, action.ballIndex)
            if(action.ballIndex === 6){
                newState = {
                    ...state,
                    team1: {...state.team1, currentOver: state.team1.currentOver+1, currentBall : 0, overs : newOverList  }
                }
            }
            else if(action.extraType === 'Lb'  || action.extraType === 'B' || action.extraType ==='') {
                newState = {
                    ...state,
                    team1: {...state.team1 , currentBall : state.team1.currentBall + 1, overs : newOverList}
                }
            } else if (action.extraType === 'Wd' || action.extraType === 'Nb'){
                newState = {
                    ...state,
                    team1: {...state.team1, overs : newOverList  }
                }
            }
            return newState;
        default:
            return state;
    }
}
