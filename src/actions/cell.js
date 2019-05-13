export const updateBodyWidth = (newBodyWidth) => {
    return { 
        type: 'UPDATE_BODY_WIDTH',
        payload: { newBodyWidth: newBodyWidth }
    }
}

export const passPlyInfoRefs = (plyInfoRefs) => {
    return { 
        type: 'PASS_PLY_INFO_REFS',
        payload: { plyInfoRefs: plyInfoRefs }
    }
}