import React from 'react';
import {connect} from 'react-redux';
import ReactTable from "react-table";


const calculateBowlerStats = (overs) => {
    // Initialize a map with bowler-name as key and nested objects asa maidenOvers, Maidens, Runs, Wickets
    // bowlerMap[over.bowlerId] = {'Overs' : 0, 'Maiden':0, 'Run':0, 'Wickets':0};
    let bowlerMap = {};


    // Calculate
    overs.map(over => {
        over.map(ball => {
            if (bowlerMap.hasOwnProperty(ball.bowlerName)) {
                bowlerMap.bowlerId.name = ball.bowlerName;
                if (ball.out) {
                    bowlerMap.bowlerId.Wickets += 1
                }
                bowlerMap.bowlerId.Run += ball.runs;
            } else {
                bowlerMap.bowlerId = {'Overs': 0, 'Maiden': 0, 'Run': 0, 'Wickets': 0, 'initial': true}
            }
        })

        // Add total overs and check if no runs have been scored then add maidens to maiden key
        if (bowlerMap.bowlerId.initial) {
            bowlerMap.bowlerId.initial = false
        } else if (bowlerMap.bowlerId.Run === 0) {
            bowlerMap.bowlerId.Maiden += 1
        }
        bowlerMap.bowlerId.Overs += 1
    })


    return bowlerMap;
}

export const BowlingScore = (props) => {
    const columns = [{
        Header: 'Bowler',
        accessor: 'name'
    },
        {
            Header: 'Overs',
            accessor: 'age',
            //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        },

    //     {
    //     Header: 'Overs',
    //     accessor: 'Overs',
    //     //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    // }, {
    //     Header: 'Maiden',
    //     accessor: 'Maiden',
    //     // Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    // }, {
    //
    //     Header: 'Wickets',
    //     accessor: 'Wickets',
    //     // Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    // }
    ]
    const data = [{
        name: 'Tanner Linsley',
        age: 26,
        friend: {
            name: 'Jason Maurer',
            age: 23,
        }
    }]

   // let bowlerStats = calculateBowlerStats(props)

    return (
            <ReactTable
                data={data}
                columns={columns}
            />
    )
}


export const mapStateToProps = (state) => {
    return {
       // team2Overs: state.teamScore.team2.overs,
        //team2Players: state.teamScore.team2.players
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {}
}

export const BowlingScoreContainer = connect(mapStateToProps, mapDispatchToProps)(BowlingScore);
