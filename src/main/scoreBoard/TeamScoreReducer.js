
let initialState = {
    team1 :{
        teamName : 'Team 1',
        runs : 0,
        wickets: 0,
        currentBall: 0 ,
        currentOver : 0,
        totalOver: 0

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
        case "UPDATE_SCORE_CARD" :
            return {
                ...state,
                team1 : {...state.team1, runs: state.team1.runs + action.run}
            }

        default:
            return state;
    }
}
