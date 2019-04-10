export const setPlyType = (plyNum) => {
    return { 
        type: 'SET_PLY_TYPE',
        payload: { 
            plyNum: plyNum
        }
    }
}

export const setPlyName = (plyListIndex, plyName) => {
    return { 
        type: 'SET_PLY_NAME',
        payload: { 
            plyListIndex: plyListIndex,
            plyName: plyName
        }
    }
}