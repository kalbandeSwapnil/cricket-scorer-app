
const recordRuns = (run) => ({
    type: "UPDATE_RUNS",
    run
});

const recordBalls = (name, ballIndex, runs, extraType ,wicket,batsmandName,battingDisplayName,bowlerDisplayName) => ({
    type: "UPDATE_BALLS",
    name,
    ballIndex,
    runs,
    extraType,
    wicket,
    batsmandName,
    battingDisplayName,
    bowlerDisplayName

});
const toggleTeams = () => ({
    type : "TOGGLE_TEAM",
});

const updateCurrentBowler = (player) => ({
    type: "UPDATE_CURRENT_BOWLER",
    player

});


export const actions = {
    recordRuns,
    recordBalls,
    updateCurrentBowler,
    toggleTeams
}