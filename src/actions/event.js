export const openCloseEvent = (toggle) => {
    return {
        type: 'OPEN_CLOSE_EVENT',
        payload: { toggle: toggle }
    }
}