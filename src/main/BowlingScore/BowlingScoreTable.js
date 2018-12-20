import React from 'react';
import {connect} from 'react-redux';
import ReactTable from "react-table";
import "react-table/react-table.css";


const calculateBowlerStats = (overs) => {
    // Initialize a map with bowler-name as key and nested objects asa maidenOvers, Maidens, Runs, Wickets
    // bowlerMap[over.bowlerId] = {'Overs' : 0, 'Maiden':0, 'Run':0, 'Wickets':0};
    let bowlerMap = []
    // Calculate
    console.log("%%%%%%%%%%%%%%%",overs);

    overs.map(over => {
        let bowlerName = '';
        over.map(ball => {
            bowlerName = ball.bowlerName;
            if (bowlerMap.hasOwnProperty(ball.bowlerName)) {
                console.log("****",bowlerMap);

                if (ball.out) {
                    bowlerMap[ball.bowlerName].Wickets += 1
                }
                bowlerMap[ball.bowlerName].Run += ball.runs;
            } else {
                bowlerMap[ball.bowlerName] = {'Overs': 0, 'Maiden': 0, 'Run': 0, 'Wickets': 0, 'initial': true}
            }
        })

        // Add total overs and check if no runs have been scored then add maidens to maiden key
        if (bowlerMap[bowlerName].initial) {
            bowlerMap[bowlerName].initial = false
        } else if (bowlerMap[bowlerName].Run === 0) {
            bowlerMap[bowlerName].Maiden += 1
        }
        bowlerMap[bowlerName].Overs += 1
        })
        console.log("%%%%%%%%%%%%%%%",bowlerMap);

    return bowlerMap;
}

export const BowlingScore = (props) => {

    let bowlerStats = calculateBowlerStats(props.team.overs)
    return (
            <ReactTable
                loading= {true}
                showPagination = {false}
                data={bowlerStats}
                className="-striped -highlight"
                columns={[
                    {
                        Header: "Bowling Table",
                        columns: [
                            {
                                Header: "Bowler Name",
                                id: "name",
                                accessor: d => d.name

                            },
                            {
                                Header: "Overs",
                                id: "overs",
                               // accessor: d => d[ball.bowlerName].Overs
                            },
                            {
                                Header: "Maiden",
                                id: "Maiden",
                               // accessor: d => d[ball.bowlerName].Maiden
                            },
                            {
                                Header: "Run",
                                id: "Run",
                               // accessor: d => d[ball.bowlerName].Run
                            },
                            {
                                Header: "Wickets",
                                id: "Wickets",
                               // accessor: d => d[ball.bowlerName].Wickets
                            }
                        ]
                    }
                ]}   />
    )
}


export const mapStateToProps = (state) => {
    return {
        team : state.teamScore.team1,
        team2 : state.teamScore.team2
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {}
}

export const BowlingScoreContainer = connect(mapStateToProps, mapDispatchToProps)(BowlingScore);
