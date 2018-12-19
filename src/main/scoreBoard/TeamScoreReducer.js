
let initialState = {
    team1 :{
        teamName : 'Team 1',
        runs : 0,
        wickets: 0,
        currentBall: 0 ,
        currentOver : 0,
        totalOver: 20,
        overs : {
            currentOverPlayed : [
                //{
                 //   bowler : 'a',
                  //  ballType : 4  
               // },
               //{
                 //   bowler : 'a',
                  //  ballType : 4  
               // },
            ],
            // over1 :[
                //{
                 //   bowler : 'a',
                  //  ballType : 4  
               // },
               //{
                 //   bowler : 'a',
                  //  ballType : 4  
               // },
            // ],

        }

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
        break
        case "UPDATE_BALLS" :
            let newState = state;
            let ball = {
                bowler : action.name,
                ballType : action.run
            };
            if(action.ballIndex === 6){
                state.team1.overs.currentOverPlayed.push(ball)
                let updatedOvers = {
                    currentOverPlayed: state.team1.overs.currentOverPlayed
                }
                newState = {
                    ...state,
                    team1: {...state.team1, currentOver: state.team1.currentOver+1, currentBall : 0, overs : updatedOvers  }
                }
            }
            else if(action.extraType === 'Lb'  || action.extraType === 'B' || action.extraType ==='') {
                state.team1.overs.currentOverPlayed.push(ball)
                let updatedOvers = {
                    currentOverPlayed: state.team1.overs.currentOverPlayed
                }
                
                newState = {
                    ...state,
                    team1: {...state.team1 , currentBall : state.team1.currentBall + 1, overs : updatedOvers}
                }
            }
            return newState;

        break
        default:
            return state;
    }
}
