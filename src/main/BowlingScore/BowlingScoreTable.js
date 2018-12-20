import React from 'react';
import {connect} from 'react-redux';
import ReactTable from "react-table";
import "react-table/react-table.css";
import * as PlayerUtil from "../utils/playerUtils";


export const BowlingScore = (props) => {
    return (
            <ReactTable
                showPagination = {false}
                data={props.playerList}
                className="-striped -highlight"
                defaultPageSize={props.playerList.length}
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
                                accessor: d => d.bowling.overs
                            },
                            {
                                Header: "Maiden",
                                id: "Maiden",
                                accessor: d => d.bowling.maiden
                            },
                            {
                                Header: "Run",
                                id: "Run",
                               accessor: d => d.bowling.runs
                            },
                            {
                                Header: "Wickets",
                                id: "Wickets",
                               accessor: d => d.bowling.wickets
                            }
                        ]
                    }
                ]}   />
    )
}


export const mapStateToProps = (state) => {
                let teamPlayers
                let teamOvers

                if(state.teamScore.team1.isBatting) {
                    teamOvers = state.teamScore.team1.overs
                    teamPlayers = state.teamScore.team2.listOfPlayers
                } else {
                    teamOvers = state.teamScore.team2.overs
                    teamPlayers = state.teamScore.team1.listOfPlayers
                }
                let playerStats = teamPlayers.filter(player => {
                    const { bowling } = PlayerUtil.getPlayerStats(player, teamOvers)
                    player.bowling = bowling
                    if(player.bowling.overs > 0) return player
                    return false
                })
    return {
        playerList : playerStats,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {}
}

export const BowlingScoreContainer = connect(mapStateToProps, mapDispatchToProps)(BowlingScore);
