export const openCloseEvent = (toggle) => {
    return {
        type: 'OPEN_CLOSE_EVENT',
        payload: { toggle: toggle }
    }
}

export const ranking = (plyListArr) => {
    return {
        type: 'RANKING',
        payload: { plyListArr: plyListArr }
    }
}

export const resetRank = () => {
    return {
        type: 'RESET_RANK'
    }
}