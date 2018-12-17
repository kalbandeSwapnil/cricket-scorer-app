
let initialState = {
    lastName : "BOB"
}

export const playerReducer = (state = initialState, action) => {

    switch(action.type) {
        case "UPDATE" :
        debugger;
        return {
            ...state,
            lastName : action.payload
        }
        default:
        return state;
    }
}
