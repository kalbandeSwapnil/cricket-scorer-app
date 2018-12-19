
const recordRuns = (run) => ({
    type: "UPDATE_RUNS",
    run
});

const recordBalls = (name, ballIndex, run, extraType) => ({
    type: "UPDATE_BALLS",
    name,
    ballIndex,
    run,
    extraType

});

export const actions = {
    recordRuns,
    recordBalls
}