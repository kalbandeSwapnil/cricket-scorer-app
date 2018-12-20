export const createNewBall = (bowlerName, runs, extraType, wicket, batsmanName,batsmanDisplayName,bowlerDisplayName) => {
     let extraRuns = (extraType=== "Wd" || extraType=== "Nb") ? 1 :0;
    return {
        bowlerName : bowlerName,
        batsmanName: batsmanName,
        runs : runs,
        isExtra : extraType === '' ? false : true,
        out : wicket,
        extras : {
            type : extraType,
        },
        batsmanDisplayName : batsmanDisplayName,
        bowlerDisplayName : bowlerDisplayName,
        totalRuns: extraRuns + runs
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
