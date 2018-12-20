import React from 'react';
import {connect} from 'react-redux';
import ReactTable from "react-table";
import "react-table/react-table.css";
import * as PlayerUtil from "../utils/playerUtils";


export const BowlingScore = (props) => {
        return (
            <div>
                <ReactTable
                    showPagination={false}
                    data={props.battingPlayerList}
                    className="-striped -highlight"
                    defaultPageSize={3}
                    columns={[
                        {
                            Header: "Batting Table",
                            columns: [
                                {
                                    Header: "Batsman",
                                    id: "Batsman",
                                    accessor: d => d.name

                                },
                                {
                                    Header: "Runs",
                                    id: "Runs",
                                    accessor: d => d.batting.runs
                                },
                                {
                                    Header: "Balls",
                                    id: "Balls",
                                    accessor: d => d.batting.balls
                                },
                                {
                                    Header: "Fours",
                                    id: "Fours",
                                    accessor: d => d.batting.fours
                                },
                                {
                                    Header: "Sixes",
                                    id: "Sixes",
                                    accessor: d => d.batting.sixes
                                },
                                // {
                                //     Header: "StrikeRate",
                                //     id: "StrikeRate",
                                //     accessor: d => d.bowling.strike
                                // }
                            ]
                        }
                    ]}/>
                <ReactTable
                    showPagination={false}
                    data={props.playerList}
                    className="-striped -highlight"
                    defaultPageSize={3}
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
                    ]}/>
            </div>
        )
    }



export const mapStateToProps = (state, ownProps) => {
                let teamPlayers
                let teamOvers
                let listOfBattingTeam

                if(state.teamScore.team1.isBatting) {
                    teamOvers = state.teamScore.team1.overs
                    teamPlayers = state.teamScore.team2.listOfPlayers
                    listOfBattingTeam = state.teamScore.team1.listOfPlayers

                } else {
                    teamOvers = state.teamScore.team2.overs
                    teamPlayers = state.teamScore.team1.listOfPlayers
                    listOfBattingTeam = state.teamScore.team2.listOfPlayers
                }


                let playerStats = teamPlayers.filter(player => {
                    const {bowling, batting } = PlayerUtil.getPlayerStats(player, teamOvers)
                    player.bowling = bowling
                    player.batting = batting
                    if(player.bowling.overs > 0) return player
                    return false
                })
                let battingPlayerList = listOfBattingTeam.filter(player => {
                    const {bowling, batting} = PlayerUtil.getPlayerStats(player, teamOvers)
                    player.bowling = bowling
                    player.batting =  batting
                    if(player.batting.runs > 0) return player
                    return false
                })
    return {
        playerList : playerStats,
        battingPlayerList: battingPlayerList,
        isBattingScore : ownProps.isBattingScore
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {}
}

export const BowlingScoreContainer = connect(mapStateToProps, mapDispatchToProps)(BowlingScore);
