
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

export const actions = {
    recordRuns,
    recordBalls
}