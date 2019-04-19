export const setPlyType = (plyNum) => {
    return { 
        type: 'SET_PLY_TYPE',
        payload: { plyNum: plyNum }
    }
}

export const setPlyName = (plyNameArr) => {
    return { 
        type: 'SET_PLY_NAME',
        payload: { plyNameArr: plyNameArr }
    }
}

export const drawLotsAnime = (newPlyArr) => {
    return { 
        type: 'DRAW_LOTS_ANIME',
        payload: { newPlyArr: newPlyArr }
    }
}

export const updateOutcome = (who, newOutcome) => {
    return { 
        type: 'UPDATE_OUTCOME',
        payload: { who: who, newOutcome: newOutcome }
    }
}

export const updateOffset = (which, newOffset) => {
    return { 
        type: 'UPDATE_OFFSET',
        payload: { which: which, newOffset: newOffset }
    }
}

export const updateTurn = (next) => {
    return {
        type: 'UPDATE_TURN',
        payload: { next: next }
    }
}

export const inOutJail = (inmate) => {
    return {
        type: 'IN_OUT_JAIL',
        payload: { inmate: inmate }
    }
}