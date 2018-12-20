export const createNewBall = (bowlerName, runs, extraType, wicket, batsmanName) => {
    return {
        bowlerName : bowlerName,
        batsmanName: batsmanName,
        runs : runs,
        isExtra : extraType === '' ? false : true,
        out : wicket,
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
