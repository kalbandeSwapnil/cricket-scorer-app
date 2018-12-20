export const createPlayer = (name, id) => {
    return {
        name: name,
        id: id,
        batting: {
            runs: 0,
            fours: 0,
            sixes: 0,
            strikeRate: 0,
            ballsFaced: 0
        },
        bowling: {
            overs: 0,
            maiden: 0,
            runs: 0,
            wickets: 0
        }
    }
}

export const computeBowlingDetails = (name, overs) => {
    return {
        overs: overs.filter((over) => {
            let updatedOver = over.filter(ball => {
                return ball.bowlerName === name
            })
            return updatedOver.length !== 0
        }).length,
        maiden: overs.filter((over) => {
            let maidenOver = over.filter(ball => {
                return ball.runs === 0
            })
            return maidenOver.length === 6
        }).length,
        runs: overs.reduce((overAllSum, over) => {
            let runsInThisOver = over.reduce((sum, ball) => {
                if(ball.bowlerName === name) return sum + ball.runs
            }, 0)
            if(runsInThisOver > 0) {
                overAllSum += runsInThisOver
            } 
            return overAllSum
        }, 0),
        wickets: overs.reduce((wickets, over) => {
            
            // let wicketsInThisOver = over.reduce((sumOfWickets, ball) => {
            //     if(ball.out) {
            //         console.log('He took a wicket')
            //         return sumOfWickets + 1                }
            // }, 0)
            // console.log(wicketsInThisOver)
            // if(wicketsInThisOver > 0) {
            //     wickets += wicketsInThisOver
            //     console.log('here')
            // }
            return wickets
        }, 0)
    }
} 

let dummyOvers = [
    [{
        bowlerName: 'Kishore',
        extras: { type: ''},
        isExtras : false,
        out: false,
        runs:  4
    },{
        bowlerName: 'Kishore',
        extras: { type: ''},
        isExtras : false,
        out: false,
        runs:  4
    }],
    [{
        bowlerName: 'Kishore',
        extras: { type: ''},
        isExtras : false,
        out: false,
        runs:  0
    },{
        bowlerName: 'Kishore',
        extras: { type: ''},
        isExtras : false,
        out: false,
        runs:  0
    },{
        bowlerName: 'Kishore',
        extras: { type: ''},
        isExtras : false,
        out: false,
        runs:  0
    },{
        bowlerName: 'Kishore',
        extras: { type: ''},
        isExtras : false,
        out: true,
        runs:  0
    },{
        bowlerName: 'Kishore',
        extras: { type: ''},
        isExtras : false,
        out: false,
        runs:  0
    },{
        bowlerName: 'Kishore',
        extras: { type: ''},
        isExtras : false,
        out: false,
        runs:  0
    }],
    [{
        bowlerName: 'ABC',
        extras: { type: ''},
        isExtras : false,
        out: false,
        runs:  4
    },]
]

let player = createPlayer('Kishore', 123)
player.bowling = computeBowlingDetails(player.name, dummyOvers)
console.log(player)