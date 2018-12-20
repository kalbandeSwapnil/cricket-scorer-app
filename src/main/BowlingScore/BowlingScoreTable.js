import React from 'react';
import {connect} from 'react-redux';
import ReactTable from "react-table";
import "react-table/react-table.css";


export const BowlingScore = (props) => {
    let bowlersList =[];

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

                            },
                            {
                                Header: "Maiden",
                                id: "Maiden",

                            },
                            {
                                Header: "Run",
                                id: "Run",

                            },
                            {
                                Header: "Wickets",
                                id: "Wickets",
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
