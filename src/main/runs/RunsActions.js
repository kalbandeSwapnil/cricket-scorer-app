
const recordRuns = (run) => ({
    type: "UPDATE_RUNS",
    run
});

const recordBalls = (name, ballIndex, runs, extraType) => ({
    type: "UPDATE_BALLS",
    name,
    ballIndex,
    runs,
    extraType

});

const updateCurrentBowler = (player) => ({
    type: "UPDATE_CURRENT_BOWLER",
    player

});


export const actions = {
    recordRuns,
    recordBalls,
    updateCurrentBowler
}