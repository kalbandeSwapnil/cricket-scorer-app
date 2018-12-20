export const createNewBall = (bowlerName, runs, extraType, batsmanName = "batsman") => {
    return {
        bowlerName : bowlerName,
        batsmanName: batsmanName,
        runs : runs,
        isExtra : extraType === '' ? false : true,
        out : false,
        extras : {
            type : extraType,
        }
    };
}

const createNewOver = () => {
    return []
}

const pushBallToOver = (ball, over) => {
    over.push(ball)
    return over
}

export const pushOverToOverList = (ball, overList, ballIndex) => {
    let lastOver
    if(overList.length) lastOver = overList.pop()
    else lastOver = []
    
    if(ballIndex === 6) {
        overList.push(pushBallToOver(ball, lastOver))
        let newOver = createNewOver()
        overList.push(newOver)
    } else {
        overList.push(pushBallToOver(ball, lastOver))
    }

    return overList
}

// const Balls = [{
//     'bowlerName': 'Brett lee',
//     'runs': 4,
//     extraType: ''
// },{
//     'bowlerName': 'Brett lee',
//     'runs': 6,
//     extraType: ''
// },{
//     'bowlerName': 'Brett lee',
//     'runs': 1,
//     extraType: 'Wd'
// },{
//     'bowlerName': 'Brett lee',
//     'runs': 2,
//     extraType: 'Nb'
// },{
//     'bowlerName': 'Brett lee',
//     'runs': 5,
//     extraType: ''
// },
// {
//     'bowlerName': 'Brett lee',
//     'runs': 4,
//     extraType: ''
// },
// {
//     'bowlerName': 'Brett lee',
//     'runs': 2,
//     extraType: ''
// },
// {
//     'bowlerName': 'Brett lee',
//     'runs': 1,
//     extraType: ''
// },
// {
//     'bowlerName': 'Brett lee',
//     'runs': 6,
//     extraType: ''
// }
// ]

// const overList = []
// Balls.map(ball => {
//     ball = createNewBall(ball.bowlerName, ball.runs, ball.extraType)
//     pushOverToOverList(ball, overList)
// })

// console.log(overList)

