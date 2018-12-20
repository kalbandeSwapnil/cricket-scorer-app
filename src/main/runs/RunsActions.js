
const recordRuns = (run) => ({
    type: "UPDATE_RUNS",
    run
});

const recordBalls = (name, ballIndex, runs, extraType ,wicket) => ({
    type: "UPDATE_BALLS",
    name,
    ballIndex,
    runs,
    extraType,
    wicket

});

export const actions = {
    recordRuns,
    recordBalls
}