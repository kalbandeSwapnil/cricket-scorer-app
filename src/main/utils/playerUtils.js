
// Function to get the batting and bowling stats of the given player
export const getPlayerStats = (player, overs) => {
    const grouped = groupPlayerDetails(overs, ball => ball.batsmanName)
    return {
        batting: computeBattingDetails(grouped, player),
        bowling: computeBowlingDetails(player.playerId, overs)
    }
}




/****
 * Local methods
 */
const groupPlayerDetails = (overs, keyGetter) => {
    const dummyMap = new Map()
    overs.forEach(over => {
        over.forEach(ball => {
            const key = keyGetter(ball)

            const collection = dummyMap.get(key)
            if(!collection) {
                dummyMap.set(key, [ball])
            } else {
                collection.push(ball)
            }
        })
    })
    return dummyMap
}



const computeBattingDetails = (grouped, player) => {
    if(grouped.get(player.playerId) === undefined) return {}
        return {
            runs: grouped.get(player.playerId).reduce((sum, ball) => {
                return sum + ball.runs
            }, 0),
            fours: grouped.get(player.playerId).filter(ball => {
                return (ball.runs === 4 && ball.extras.type === '')
            }).length,
            sixes: grouped.get(player.playerId).filter(ball => {
                return ball.runs === 6 && ball.extras.type === ''
            }).length,
            balls: grouped.get(player.playerId).filter(ball => {
                return (ball.extras.type === '' || ball.extras.type === 'Lb' || ball.extras.type === 'B')
            }).length
        }
}

const computeBowlingDetails = (name, overs) => {
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
                if (ball.bowlerName === name) return sum + ball.runs
                return sum
            }, 0)
            if (runsInThisOver > 0) {
                overAllSum += runsInThisOver
            }
            return overAllSum
        }, 0),
        wickets: overs.reduce((wickets, over) => {
            let noOfWicketsInThisOver = over.reduce((sumOfWickets, ball) => {
                if(ball.out) return sumOfWickets + 1
                return sumOfWickets
            }, 0)
            if(noOfWicketsInThisOver > 0) {
                wickets += noOfWicketsInThisOver
                console.log('here')
            }
            return wickets
        }, 0)
    }
}
