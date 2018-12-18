
let initialState = {
    team1 :{
        teamName : 'Team 1',
        runs : 0,
        wickets: 0,
        currentBall: 0 ,
        currentOver : 0,
        totalOver: 20,
        overs : []

    },
    team2 :{
        teamName : 'Team 2',
        runs : 150,
        wickets: 8,
        currentBall: 0 ,
        currentOver : 0,
        totalOver: 20
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
            let newState ;
            if(action.bowlIndex === 6){
                newState = {
                    ...state,
                    team1: {...state.team1, currentOver: state.team1.currentOver+1, currentBall : 0}
                }
            }
            else {
                newState = {
                    ...state,
                    team1: {...state.team1 , currentBall : state.team1.currentBall + 1}
                }
            }
            return newState;


        default:
            return state;
    }
}
