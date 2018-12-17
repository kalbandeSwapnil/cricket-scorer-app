
let initialState = {
    lastName : "BOB"
}

export const playerReducer = (state = initialState, action) => {

    switch(action.type) {
        case "UPDATE" :{
        return {
            ...state,
            lastName : state.lastName = action.lastName
        }
        }
        default:
        return state;
    }
}
