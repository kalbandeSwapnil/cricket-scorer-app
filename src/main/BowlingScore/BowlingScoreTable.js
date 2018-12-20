import React from 'react';
import {connect} from 'react-redux';
import ReactTable from "react-table";
import "react-table/react-table.css";
import * as PlayerUtil from "../utils/playerUtils";


export const BowlingScore = (props) => {
    let bowlersList =[];
    // for(let i=0;i<props.team.listOfPlayers.length;i++){
    //     if(props.team.listOfPlayers[i].bowling) {
    //         let bowlerStats = PlayerUtil.computeBowlingDetails(props.team.listOfPlayers[i].name, props.team.overs)
    //         bowlersList.push(bowlerStats);
    //     }
    // }

    console.log("******",bowlersList);

    return (
            <ReactTable
                loading= {true}
                showPagination = {false}
                data={bowlersList}
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
