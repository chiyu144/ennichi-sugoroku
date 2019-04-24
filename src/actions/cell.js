export const updateBodyWidth = (newBodyWidth) => {
    return { 
        type: 'UPDATE_BODY_WIDTH',
        payload: { newBodyWidth: newBodyWidth }
    }
}