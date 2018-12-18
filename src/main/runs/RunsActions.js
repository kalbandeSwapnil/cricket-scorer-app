
const recordRuns = (run) => ({
    type: "UPDATE_RUNS",
    run
});

const recordBalls = (name, bowlIndex) => ({
    type: "UPDATE_BALLS",
    name,
    bowlIndex

});

export const actions = {
    recordRuns,
    recordBalls
}